package de.hanke.arnim.ConfigurationServer.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModelProperty;

import java.util.ArrayList;
import java.util.List;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;

/**
 * TimeseriesViewConfiguration
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2020-08-16T09:50:36.739Z")




public class TimeseriesViewConfiguration   {
  @JsonProperty("name")
  private String name = null;

  @JsonProperty("timeseriesPresentationConfigurations")
  @Valid
  private List<TimeseriesPresentationConfiguration> timeseriesPresentationConfigurations = null;

  public TimeseriesViewConfiguration name(String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(value = "")


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public TimeseriesViewConfiguration timeseriesList(List<TimeseriesPresentationConfiguration> timeseriesList) {
    this.timeseriesPresentationConfigurations = timeseriesList;
    return this;
  }

  public TimeseriesViewConfiguration addTimeseriesListItem(TimeseriesPresentationConfiguration timeseriesListItem) {
    if (this.timeseriesPresentationConfigurations == null) {
      this.timeseriesPresentationConfigurations = new ArrayList<TimeseriesPresentationConfiguration>();
    }
    this.timeseriesPresentationConfigurations.add(timeseriesListItem);
    return this;
  }

  /**
   * Get timeseriesList
   * @return timeseriesList
  **/
  @ApiModelProperty(value = "")

  @Valid

  public List<TimeseriesPresentationConfiguration> getTimeseriesPresentationConfigurations() {
    return timeseriesPresentationConfigurations;
  }

  public void setTimeseriesPresentationConfigurations(List<TimeseriesPresentationConfiguration> timeseriesPresentationConfigurations) {
    this.timeseriesPresentationConfigurations = timeseriesPresentationConfigurations;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TimeseriesViewConfiguration timeseriesViewConfiguration = (TimeseriesViewConfiguration) o;
    return Objects.equals(this.name, timeseriesViewConfiguration.name) &&
        Objects.equals(this.timeseriesPresentationConfigurations, timeseriesViewConfiguration.timeseriesPresentationConfigurations);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, timeseriesPresentationConfigurations);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TimeseriesViewConfiguration {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    timeseriesList: ").append(toIndentedString(timeseriesPresentationConfigurations)).append("\n");
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

