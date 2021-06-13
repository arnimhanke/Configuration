package de.hanke.arnim.TSPersistence.elastic;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.HttpHost;
import org.elasticsearch.action.delete.DeleteRequest;
import org.elasticsearch.action.delete.DeleteResponse;
import org.elasticsearch.action.index.IndexRequest;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.action.search.SearchScrollRequest;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.common.unit.TimeValue;
import org.elasticsearch.common.xcontent.XContentType;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.rest.RestStatus;
import org.elasticsearch.search.Scroll;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.builder.SearchSourceBuilder;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

public class ElasticSearchUtils {


    public static final String INDEX_VIEW_CONFIGURATION = "viewconfiguration";
    public static final String INDEX_TIMESERIES_CONFIGURATION = "timeseriesconfiguration";
    public final ObjectMapper mapper = new ObjectMapper();
    public String ADDRESS_ELASTICSEARCH;
    public int PORT_ELASTICSEARCH;
    public String PROTOCOL_ELASTICSEARCH;
    public String ADDRESS_ISG;
    Properties properties;

    public ElasticSearchUtils() {
        properties = new Properties();
        try {
            properties.load(ElasticSearchUtils.class.getClassLoader().getResourceAsStream("elasticsearch.properties"));
            ADDRESS_ELASTICSEARCH = properties.getProperty("ADRESS_ELASTICSEARCH");
            PORT_ELASTICSEARCH = Integer.parseInt(properties.getProperty("PORT_ELASTICSEARCH"));
            ADDRESS_ISG = properties.getProperty("ADDRESS_ISG");
        } catch (Exception e) {
            System.out.println("Fehler beim Laden der Konfiguration");
            e.printStackTrace();
        }
    }

    public static void main(String[] args) throws Exception {
        ElasticSearchUtils elasticSearchUtils = new ElasticSearchUtils();
        TimeseriesViewConfiguration persistenceParametersValuesDto = new TimeseriesViewConfiguration();
        persistenceParametersValuesDto.setName("test");
        ArrayList<TimeseriesPresentationConfiguration> timeseriesPresentationConfigurations = new ArrayList<>();
        TimeseriesPresentationConfiguration one = new TimeseriesPresentationConfiguration();
        one.setFarbe("FAAARBE");
        one.setZeitreihenKennung("ia_aussentemperatur");
        timeseriesPresentationConfigurations.add(one);
        persistenceParametersValuesDto.setTimeseriesPresentationConfigurations(timeseriesPresentationConfigurations);
        TimeseriesViewConfiguration test = elasticSearchUtils.putTimeseriesConfigurationByName("test", persistenceParametersValuesDto);
        System.out.println(test);
        System.out.println(elasticSearchUtils.getTimeseriesConfigurationByName("test").getName());


        ViewConfiguration viewConfiguration = new ViewConfiguration();
        viewConfiguration.setName("main");
        viewConfiguration.setParentConfiguration(null);
        viewConfiguration.setPath("/");
        viewConfiguration.setTsConfigurationName("test");
        viewConfiguration.setTitle("Main");
        viewConfiguration.setViewModel("root");
        elasticSearchUtils.putViewConfigurationByName("test", viewConfiguration);

        System.out.println(elasticSearchUtils.getViewConfigurationByName("main").getName());
    }

    public RestHighLevelClient generateESRestClient() {
        return new RestHighLevelClient(RestClient.builder(new HttpHost(ADDRESS_ELASTICSEARCH, PORT_ELASTICSEARCH, PROTOCOL_ELASTICSEARCH)));
    }

    public TimeseriesViewConfiguration getTimeseriesConfigurationByName(String configurationName) throws JsonProcessingException {

        List<String> strings = loadConfigurationForNameFromDBAsString(INDEX_TIMESERIES_CONFIGURATION, configurationName);
        if (strings.size() == 1) {
            return mapper.readValue(strings.get(0), TimeseriesViewConfiguration.class);
        }

        return null;
    }

    public ViewConfiguration getViewConfigurationByName(String configurationName) throws JsonProcessingException {

        List<String> strings = loadConfigurationForNameFromDBAsString(INDEX_VIEW_CONFIGURATION, configurationName);
        if (strings.size() == 1) {
            return mapper.readValue(strings.get(0), ViewConfiguration.class);
        }

        return null;
    }

    public TimeseriesViewConfiguration putTimeseriesConfigurationByName(String configurationName, TimeseriesViewConfiguration persistenceParametersValuesDto) throws Exception {
        String viewAsString = putStringValueInGivenIndex(mapper.writeValueAsString(persistenceParametersValuesDto), INDEX_TIMESERIES_CONFIGURATION, configurationName);
        if(viewAsString != null) {
            return mapper.readValue(viewAsString, TimeseriesViewConfiguration.class);
        } else {
            return null;
        }
    }

    public ViewConfiguration putViewConfigurationByName(String configurationName, ViewConfiguration viewConfiguration) throws Exception {
        String viewAsString = putStringValueInGivenIndex(mapper.writeValueAsString(viewConfiguration), INDEX_VIEW_CONFIGURATION, configurationName);
        if(viewAsString != null) {
            return mapper.readValue(viewAsString, ViewConfiguration.class);
        } else {
            return null;
        }
    }

    public boolean deleteTimeseriesConfigurationByName(String configurationName) {
        return deleteRequest(configurationName, INDEX_TIMESERIES_CONFIGURATION);
    }

    public boolean deleteViewConfigurationByName(String configurationName) {
        return deleteRequest(configurationName, INDEX_VIEW_CONFIGURATION);
    }

    private boolean deleteRequest(String configurationName, String index) {
        try (RestHighLevelClient client = generateESRestClient()) {
            DeleteRequest deleteRequest = new DeleteRequest().index(index).id(configurationName);
            DeleteResponse delete = client.delete(deleteRequest, RequestOptions.DEFAULT);
            return delete.status().compareTo(RestStatus.OK) == 0;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return false;
    }


    // region Methoden fuer den Datenbankzugriff

    private List<String> loadConfigurationForNameFromDBAsString(String index, String searchPatternTsID) {
        List<String> allSearchHits = new ArrayList<>();
        SearchRequest searchRequest = new SearchRequest();
        searchRequest.indices(index);
        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
        searchSourceBuilder.size(10);

        searchRequest.source(searchSourceBuilder);
        Scroll scroll = new Scroll(TimeValue.timeValueMinutes(1L));
        searchRequest.scroll(scroll);
        searchSourceBuilder.query(QueryBuilders.regexpQuery("name", searchPatternTsID));

        try (RestHighLevelClient client = generateESRestClient()) {
            SearchResponse searchResponse = client.search(searchRequest, RequestOptions.DEFAULT);
            String scrollId = searchResponse.getScrollId();
            SearchHit[] searchHits = searchResponse.getHits().getHits();

            for (SearchHit searchHit : searchHits) {
                // add ValueDtos to list
                allSearchHits.add(searchHit.getSourceAsString());
            }

            while (searchHits.length > 0) {
                SearchScrollRequest scrollRequest = new SearchScrollRequest(scrollId);
                scrollRequest.scroll(scroll);
                searchResponse = client.scroll(scrollRequest, RequestOptions.DEFAULT);
                scrollId = searchResponse.getScrollId();
                searchHits = searchResponse.getHits().getHits();


                for (SearchHit searchHit : searchHits) {
                    // add ValueDtos to list
                    allSearchHits.add(searchHit.getSourceAsString());
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return allSearchHits;
    }


    private String putStringValueInGivenIndex(String value, String index, String id) {
        try (RestHighLevelClient client = generateESRestClient()) {
            IndexRequest source = new IndexRequest(index.toLowerCase()).id(id.toLowerCase()).source(value, XContentType.JSON);
            IndexResponse indexResponse = client.index(source, RequestOptions.DEFAULT);
            if (indexResponse.status().compareTo(RestStatus.CREATED) == 0 || indexResponse.status().compareTo(RestStatus.OK) == 0) {
                return value;
            } else {
                System.err.println(indexResponse.status());
            }

        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
        return null;
    }

    public List<TimeseriesViewConfiguration> getAllTimeseriesConfigurations() {

        List<String> strings = loadConfigurationForNameFromDBAsString(INDEX_TIMESERIES_CONFIGURATION, ".*");

        ArrayList<TimeseriesViewConfiguration> timeseriesViewConfigurations = new ArrayList<>();
        strings.forEach(s -> {
            try {
                s = s.replace("StiebelEltronHeatPumpCorrectedDatasTest", "StiebelEltronHeatPumpRawDatas");
                timeseriesViewConfigurations.add(mapper.readValue(s, TimeseriesViewConfiguration.class));
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }
        });

        return timeseriesViewConfigurations;
    }

    public List<ViewConfiguration> getAllViewConfigurations() {

        List<String> strings = loadConfigurationForNameFromDBAsString(INDEX_VIEW_CONFIGURATION, ".*");

        ArrayList<ViewConfiguration> timeseriesViewConfigurations = new ArrayList<>();
        strings.forEach(s -> {
            try {
                timeseriesViewConfigurations.add(mapper.readValue(s, ViewConfiguration.class));
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }
        });

        return timeseriesViewConfigurations;
    }

    // endregion
}
