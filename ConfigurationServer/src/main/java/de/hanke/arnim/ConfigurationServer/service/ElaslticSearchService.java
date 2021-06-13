package de.hanke.arnim.ConfigurationServer.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.hanke.arnim.ConfigurationServer.model.TimeseriesViewConfiguration;
import de.hanke.arnim.ConfigurationServer.model.ViewConfiguration;
import de.hanke.arnim.TSPersistence.elastic.ElasticSearchUtils;

import java.util.List;

/**
 * Schnittstelle zwischen der Persistenz-Schicht und der Server
 */
public class ElaslticSearchService {

    private final ObjectMapper objectMapper = new ObjectMapper();

    public boolean deleteTimeseriesConfigurationByName(String configurationName) {
        return new ElasticSearchUtils().deleteTimeseriesConfigurationByName(configurationName);
    }

    public boolean deleteViewConfigurationByName(String configurationName) {
        return new ElasticSearchUtils().deleteViewConfigurationByName(configurationName);
    }

    public TimeseriesViewConfiguration getTimeseriesConfigurationByName(String configurationName) throws Exception {
        return parseTimeseriesViewConfiguration(new ElasticSearchUtils().getTimeseriesConfigurationByName(configurationName));
    }

    public ViewConfiguration getViewConfigurationByName(String configurationName) throws Exception {
        return parseViewConfiguration(new ElasticSearchUtils().getViewConfigurationByName(configurationName));
    }

    public TimeseriesViewConfiguration putTimeseriesConfigurationByName(String configurationName, TimeseriesViewConfiguration persistenceParametersValuesDto) throws Exception {
        return parseTimeseriesViewConfiguration(new ElasticSearchUtils().putTimeseriesConfigurationByName(configurationName, parseToElasticTimeseriesViewConfiguration(persistenceParametersValuesDto)));
    }

    public ViewConfiguration putViewConfigurationByName(String configurationName, ViewConfiguration viewConfiguration) throws Exception {

        de.hanke.arnim.TSPersistence.elastic.ViewConfiguration elasticViewConfiguration = parseToElasticViewConfiguration(viewConfiguration);

        return parseViewConfiguration(new ElasticSearchUtils().putViewConfigurationByName(configurationName, elasticViewConfiguration));
    }

    public List<TimeseriesViewConfiguration> getAllTimeseriesConfigurations() throws Exception {
        return parseTimeseriesViewConfiguration(new ElasticSearchUtils().getAllTimeseriesConfigurations());
    }

    public List<ViewConfiguration> getAllViewConfigurations() throws Exception {
        return parseViewConfiguration(new ElasticSearchUtils().getAllViewConfigurations());
    }

    public de.hanke.arnim.TSPersistence.elastic.TimeseriesViewConfiguration parseToElasticTimeseriesViewConfiguration(TimeseriesViewConfiguration viewConfiguration) throws java.io.IOException {
        return objectMapper.readValue(objectMapper.writeValueAsString(viewConfiguration),
                de.hanke.arnim.TSPersistence.elastic.TimeseriesViewConfiguration.class);
    }

    public de.hanke.arnim.TSPersistence.elastic.ViewConfiguration parseToElasticViewConfiguration(ViewConfiguration viewConfiguration) throws java.io.IOException {
        return objectMapper.readValue(objectMapper.writeValueAsString(viewConfiguration),
                de.hanke.arnim.TSPersistence.elastic.ViewConfiguration.class);
    }

    public TimeseriesViewConfiguration parseTimeseriesViewConfiguration(de.hanke.arnim.TSPersistence.elastic.TimeseriesViewConfiguration other) throws Exception {
        return objectMapper.readValue(objectMapper.writeValueAsString(other), TimeseriesViewConfiguration.class);
    }

    public ViewConfiguration parseViewConfiguration(de.hanke.arnim.TSPersistence.elastic.ViewConfiguration other) throws Exception {
        return objectMapper.readValue(objectMapper.writeValueAsString(other), ViewConfiguration.class);
    }

    public List<TimeseriesViewConfiguration> parseTimeseriesViewConfiguration(List<de.hanke.arnim.TSPersistence.elastic.TimeseriesViewConfiguration> others) throws Exception {
        return objectMapper.readValue(objectMapper.writeValueAsString(others), List.class);
    }

    public List<ViewConfiguration> parseViewConfiguration(List<de.hanke.arnim.TSPersistence.elastic.ViewConfiguration> others) throws Exception {
        return objectMapper.readValue(objectMapper.writeValueAsString(others), List.class);
    }
}
