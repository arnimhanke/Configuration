package de.hanke.arnim.TSPersistence.elastic;

public class TimeseriesPresentationConfiguration {

    private String zeitreihenKennung;
    private String databaseName;
    private String farbe;

    public TimeseriesPresentationConfiguration(String zeitreihenKennung, String databaseName, String farbe) {
        this.zeitreihenKennung = zeitreihenKennung;
        this.databaseName = databaseName;
        this.farbe = farbe;
    }

    public TimeseriesPresentationConfiguration() {
    }

    public String getZeitreihenKennung() {
        return zeitreihenKennung;
    }

    public void setZeitreihenKennung(String zeitreihenKennung) {
        this.zeitreihenKennung = zeitreihenKennung;
    }

    public String getFarbe() {
        return farbe;
    }

    public void setFarbe(String farbe) {
        this.farbe = farbe;
    }

    public String getDatabaseName() {
        return databaseName;
    }

    public void setDatabaseName(String databaseName) {
        this.databaseName = databaseName;
    }
}
