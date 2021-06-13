package de.hanke.arnim.ConfigurationServer.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.validation.annotation.Validated;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * ViewConfiguration
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2020-09-06T12:22:10.609Z")


public class ViewConfiguration {
    @JsonProperty("name")
    private String name = null;

    @JsonProperty("title")
    private String title = null;

    @JsonProperty("path")
    private String path = null;

    @JsonProperty("viewModel")
    private String viewModel = null;

    @JsonProperty("tsConfigurationName")
    private String tsConfigurationName = null;

    @JsonProperty("parentConfiguration")
    private String parentConfiguration = null;

    @JsonProperty("subViewConfigurations")
    @Valid
    private List<String> subViewConfigurations = null;

    public ViewConfiguration name(String name) {
        this.name = name;
        return this;
    }

    /**
     * Get name
     *
     * @return name
     **/
    @ApiModelProperty(value = "")


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ViewConfiguration title(String title) {
        this.title = title;
        return this;
    }

    /**
     * Get title
     *
     * @return title
     **/
    @ApiModelProperty(value = "")


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public ViewConfiguration path(String path) {
        this.path = path;
        return this;
    }

    /**
     * Get path
     *
     * @return path
     **/
    @ApiModelProperty(value = "")


    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public ViewConfiguration viewModel(String viewModel) {
        this.viewModel = viewModel;
        return this;
    }

    /**
     * Get viewModel
     *
     * @return viewModel
     **/
    @ApiModelProperty(value = "")


    public String getViewModel() {
        return viewModel;
    }

    public void setViewModel(String viewModel) {
        this.viewModel = viewModel;
    }

    public ViewConfiguration tsConfigurationName(String tsConfigurationName) {
        this.tsConfigurationName = tsConfigurationName;
        return this;
    }

    /**
     * Get tsConfigurationName
     *
     * @return tsConfigurationName
     **/
    @ApiModelProperty(value = "")


    public String getTsConfigurationName() {
        return tsConfigurationName;
    }

    public void setTsConfigurationName(String tsConfigurationName) {
        this.tsConfigurationName = tsConfigurationName;
    }

    public ViewConfiguration parentConfiguration(String parentConfiguration) {
        this.parentConfiguration = parentConfiguration;
        return this;
    }

    /**
     * Get parentConfiguration
     *
     * @return parentConfiguration
     **/
    @ApiModelProperty(value = "")


    public String getParentConfiguration() {
        return parentConfiguration;
    }

    public void setParentConfiguration(String parentConfiguration) {
        this.parentConfiguration = parentConfiguration;
    }

    public ViewConfiguration subViewConfigurations(List<String> subViewConfigurations) {
        this.subViewConfigurations = subViewConfigurations;
        return this;
    }

    public ViewConfiguration addSubViewConfigurationsItem(String subViewConfigurationsItem) {
        if (this.subViewConfigurations == null) {
            this.subViewConfigurations = new ArrayList<String>();
        }
        this.subViewConfigurations.add(subViewConfigurationsItem);
        return this;
    }

    /**
     * Get subViewConfigurations
     *
     * @return subViewConfigurations
     **/
    @ApiModelProperty(value = "")


    public List<String> getSubViewConfigurations() {
        return subViewConfigurations;
    }

    public void setSubViewConfigurations(List<String> subViewConfigurations) {
        this.subViewConfigurations = subViewConfigurations;
    }


    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ViewConfiguration viewConfiguration = (ViewConfiguration) o;
        return Objects.equals(this.name, viewConfiguration.name) &&
                Objects.equals(this.title, viewConfiguration.title) &&
                Objects.equals(this.path, viewConfiguration.path) &&
                Objects.equals(this.viewModel, viewConfiguration.viewModel) &&
                Objects.equals(this.tsConfigurationName, viewConfiguration.tsConfigurationName) &&
                Objects.equals(this.parentConfiguration, viewConfiguration.parentConfiguration) &&
                Objects.equals(this.subViewConfigurations, viewConfiguration.subViewConfigurations);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, title, path, viewModel, tsConfigurationName, parentConfiguration, subViewConfigurations);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class ViewConfiguration {\n");

        sb.append("    name: ").append(toIndentedString(name)).append("\n");
        sb.append("    title: ").append(toIndentedString(title)).append("\n");
        sb.append("    path: ").append(toIndentedString(path)).append("\n");
        sb.append("    viewModel: ").append(toIndentedString(viewModel)).append("\n");
        sb.append("    tsConfigurationName: ").append(toIndentedString(tsConfigurationName)).append("\n");
        sb.append("    parentConfiguration: ").append(toIndentedString(parentConfiguration)).append("\n");
        sb.append("    subViewConfigurations: ").append(toIndentedString(subViewConfigurations)).append("\n");
        sb.append("}");
        return sb.toString();
    }

    /**
     * Convert the given object to string with each line indented by 4 spaces
     * (except the first line).
     */
    private String toIndentedString(java.lang.Object o) {
        if (o == null) {
            return "null";
        }
        return o.toString().replace("\n", "\n    ");
    }
}

