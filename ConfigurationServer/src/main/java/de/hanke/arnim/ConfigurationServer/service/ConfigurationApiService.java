package de.hanke.arnim.ConfigurationServer.service;

import de.hanke.arnim.ConfigurationServer.model.TimeseriesViewConfiguration;
import de.hanke.arnim.ConfigurationServer.model.ViewConfiguration;

import java.util.List;

/**
 * Dient nur als Zwischenschicht, da ich das bei anderen Micro-Service genauso gemacht habe
 */
public class ConfigurationApiService {

    public boolean deleteTimeseriesConfigurationByName(String configurationName) {
        return new ElaslticSearchService().deleteTimeseriesConfigurationByName(configurationName);
    }

    public boolean deleteViewConfigurationByName(String configurationName) {
        return new ElaslticSearchService().deleteViewConfigurationByName(configurationName);
    }

    public TimeseriesViewConfiguration getTimeseriesConfigurationByName(String configurationName) throws Exception {
        return new ElaslticSearchService().getTimeseriesConfigurationByName(configurationName);
    }

    public ViewConfiguration getViewConfigurationByName(String configurationName) throws Exception {
        return new ElaslticSearchService().getViewConfigurationByName(configurationName);
    }

    public TimeseriesViewConfiguration putTimeseriesConfigurationByName(String configurationName, TimeseriesViewConfiguration persistenceParametersValuesDto) throws Exception {
        return new ElaslticSearchService().putTimeseriesConfigurationByName(configurationName, persistenceParametersValuesDto);
    }

    public ViewConfiguration putViewConfigurationByName(String configurationName, ViewConfiguration viewConfiguration) throws Exception {
        return new ElaslticSearchService().putViewConfigurationByName(configurationName, viewConfiguration);
    }

    public List<TimeseriesViewConfiguration> getAllTimeseriesConfigurations() throws Exception {
        return new ElaslticSearchService().getAllTimeseriesConfigurations();
    }

    public List<ViewConfiguration> getAllViewConfigurations() throws Exception {
        return new ElaslticSearchService().getAllViewConfigurations();
    }
}
