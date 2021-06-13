package de.hanke.arnim.ConfigurationServer.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.validation.annotation.Validated;

import java.util.Objects;

/**
 * TimeseriesPresentationConfiguration
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2020-09-12T16:55:52.887Z")


public class TimeseriesPresentationConfiguration {
    @JsonProperty("zeitreihenKennung")
    private String zeitreihenKennung = null;

    @JsonProperty("databaseName")
    private String databaseName = null;

    @JsonProperty("farbe")
    private String farbe = null;

    public TimeseriesPresentationConfiguration zrKennung(String zrKennung) {
        this.zeitreihenKennung = zrKennung;
        return this;
    }

    /**
     * Get zrKennung
     *
     * @return zrKennung
     **/
    @ApiModelProperty(value = "")


    public String getZeitreihenKennung() {
        return zeitreihenKennung;
    }

    public void setZeitreihenKennung(String zeitreihenKennung) {
        this.zeitreihenKennung = zeitreihenKennung;
    }

    public TimeseriesPresentationConfiguration databaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }

    /**
     * Get databaseName
     *
     * @return databaseName
     **/
    @ApiModelProperty(value = "")


    public String getDatabaseName() {
        return databaseName;
    }

    public void setDatabaseName(String databaseName) {
        this.databaseName = databaseName;
    }

    public TimeseriesPresentationConfiguration farbe(String farbe) {
        this.farbe = farbe;
        return this;
    }

    /**
     * Get farbe
     *
     * @return farbe
     **/
    @ApiModelProperty(value = "")


    public String getFarbe() {
        return farbe;
    }

    public void setFarbe(String farbe) {
        this.farbe = farbe;
    }


    @Override
    public boolean equals(java.lang.Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        TimeseriesPresentationConfiguration timeseriesPresentationConfiguration = (TimeseriesPresentationConfiguration) o;
        return Objects.equals(this.zeitreihenKennung, timeseriesPresentationConfiguration.zeitreihenKennung) &&
                Objects.equals(this.databaseName, timeseriesPresentationConfiguration.databaseName) &&
                Objects.equals(this.farbe, timeseriesPresentationConfiguration.farbe);
    }

    @Override
    public int hashCode() {
        return Objects.hash(zeitreihenKennung, databaseName, farbe);
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("class TimeseriesPresentationConfiguration {\n");

        sb.append("    zrKennung: ").append(toIndentedString(zeitreihenKennung)).append("\n");
        sb.append("    databaseName: ").append(toIndentedString(databaseName)).append("\n");
        sb.append("    farbe: ").append(toIndentedString(farbe)).append("\n");
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

