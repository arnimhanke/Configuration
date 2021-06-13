package de.hanke.arnim.ConfigurationServer.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import de.hanke.arnim.ConfigurationServer.model.TimeseriesViewConfiguration;
import de.hanke.arnim.ConfigurationServer.model.ViewConfiguration;
import de.hanke.arnim.ConfigurationServer.service.ConfigurationApiService;
import io.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.List;

@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2020-08-16T09:50:36.739Z")

@Controller
public class ConfigurationApiController implements ConfigurationApi {

    private static final Logger log = LoggerFactory.getLogger(ConfigurationApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;

    @org.springframework.beans.factory.annotation.Autowired
    public ConfigurationApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<Void> deleteTimeseriesConfigurationByName(@ApiParam(value = "", required = true) @PathVariable("configurationName") String configurationName) {
        String accept = request.getHeader("Accept");
        if (new ConfigurationApiService().deleteTimeseriesConfigurationByName(configurationName)) {
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    public ResponseEntity<Void> deleteViewConfigurationByName(@ApiParam(value = "", required = true) @PathVariable("configurationName") String configurationName) {
        String accept = request.getHeader("Accept");
        if (new ConfigurationApiService().deleteViewConfigurationByName(configurationName)) {
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    public ResponseEntity<List<TimeseriesViewConfiguration>> getAllTimeseriesConfigurations() {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<List<TimeseriesViewConfiguration>>(new ConfigurationApiService().getAllTimeseriesConfigurations(), HttpStatus.OK);
            } catch (Exception e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<List<TimeseriesViewConfiguration>>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<List<ViewConfiguration>> getAllViewConfigurations() {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<List<ViewConfiguration>>(new ConfigurationApiService().getAllViewConfigurations(), HttpStatus.OK);
            } catch (Exception e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<List<ViewConfiguration>>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<TimeseriesViewConfiguration> getTimeseriesConfigurationByName(@ApiParam(value = "", required = true) @PathVariable("configurationName") String configurationName) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<TimeseriesViewConfiguration>(new ConfigurationApiService().getTimeseriesConfigurationByName(configurationName), HttpStatus.OK);
            } catch (Exception e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<TimeseriesViewConfiguration>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<TimeseriesViewConfiguration>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ViewConfiguration> getViewConfigurationByName(@ApiParam(value = "", required = true) @PathVariable("configurationName") String configurationName) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ViewConfiguration>(new ConfigurationApiService().getViewConfigurationByName(configurationName), HttpStatus.OK);
            } catch (Exception e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ViewConfiguration>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ViewConfiguration>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<TimeseriesViewConfiguration> putTimeseriesConfigurationByName(@ApiParam(value = "", required = true) @PathVariable("configurationName") String configurationName, @ApiParam(value = "") @Valid @RequestBody TimeseriesViewConfiguration persistenceParametersValuesDto) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<TimeseriesViewConfiguration>(new ConfigurationApiService().putTimeseriesConfigurationByName(configurationName, persistenceParametersValuesDto), HttpStatus.OK);
            } catch (Exception e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<TimeseriesViewConfiguration>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<TimeseriesViewConfiguration>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ViewConfiguration> putViewConfigurationByName(@ApiParam(value = "", required = true) @PathVariable("configurationName") String configurationName, @ApiParam(value = "") @Valid @RequestBody ViewConfiguration viewConfiguration) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ViewConfiguration>(new ConfigurationApiService().putViewConfigurationByName(configurationName, viewConfiguration), HttpStatus.OK);
            } catch (Exception e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ViewConfiguration>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ViewConfiguration>(HttpStatus.NOT_IMPLEMENTED);
    }

}
