package de.hanke.arnim.TSPersistence.elastic;

import java.util.List;

public class TimeseriesViewConfiguration {

    private String name;
    private List<TimeseriesPresentationConfiguration> timeseriesPresentationConfigurations;

    public TimeseriesViewConfiguration(String name, List<TimeseriesPresentationConfiguration> timeseriesPresentationConfigurations) {
        this.name = name;
        this.timeseriesPresentationConfigurations = timeseriesPresentationConfigurations;
    }

    public TimeseriesViewConfiguration() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<TimeseriesPresentationConfiguration> getTimeseriesPresentationConfigurations() {
        return timeseriesPresentationConfigurations;
    }

    public void setTimeseriesPresentationConfigurations(List<TimeseriesPresentationConfiguration> timeseriesPresentationConfigurations) {
        this.timeseriesPresentationConfigurations = timeseriesPresentationConfigurations;
    }
}
