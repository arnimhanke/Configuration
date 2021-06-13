package de.hanke.arnim.TSPersistence.elastic;

import java.util.List;

public class ViewConfiguration {

    private String title;
    private String path;
    private String name;
    private String tsConfigurationName;
    private String viewModel;
    private String parentConfiguration;
    private List<String> subViewConfigurations;

    public ViewConfiguration(String title, String path, String name, String tsConfigurationName, String viewModel, String parentConfiguration, List<String> subViewConfigurations) {
        this.title = title;
        this.path = path;
        this.name = name;
        this.tsConfigurationName = tsConfigurationName;
        this.viewModel = viewModel;
        this.parentConfiguration = parentConfiguration;
        this.subViewConfigurations = subViewConfigurations;
    }

    public ViewConfiguration() {
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTsConfigurationName() {
        return tsConfigurationName;
    }

    public void setTsConfigurationName(String tsConfigurationName) {
        this.tsConfigurationName = tsConfigurationName;
    }

    public String getViewModel() {
        return viewModel;
    }

    public void setViewModel(String viewModel) {
        this.viewModel = viewModel;
    }

    public String getParentConfiguration() {
        return parentConfiguration;
    }

    public void setParentConfiguration(String parentConfiguration) {
        this.parentConfiguration = parentConfiguration;
    }

    public List<String> getSubViewConfigurations() {
        return subViewConfigurations;
    }

    public void setSubViewConfigurations(List<String> subViewConfigurations) {
        this.subViewConfigurations = subViewConfigurations;
    }
}
