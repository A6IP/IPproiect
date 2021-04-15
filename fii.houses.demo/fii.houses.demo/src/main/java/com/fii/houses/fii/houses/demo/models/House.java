package com.fii.houses.fii.houses.demo.models;

import javax.persistence.*;
import javax.xml.crypto.Data;
import java.io.File;
import java.util.*;

@Entity
public class House {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID houseID;
    private String adress, city, country, description;
    private Integer nrCamere, etaj, suprafata, nrBai;
    private Integer tipImobil;
    private File image;
    @ElementCollection
    private Map<Date, ArrayList<Float>> istoricPreturi = new TreeMap<>();
    @ElementCollection
    private Map<Date,Integer> istoricFavorite = new TreeMap<>();
    private Integer noOfFave = 0;
    private Float pretActual;
    private Date creationDate;
    private Integer views;

    public UUID getHouseID() {
        return houseID;
    }

    public void setHouseID(UUID houseID) {
        this.houseID = houseID;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Integer getNrCamere() {
        return nrCamere;
    }

    public void setNrCamere(Integer nrCamere) {
        this.nrCamere = nrCamere;
    }

    public Integer getEtaj() {
        return etaj;
    }

    public void setEtaj(Integer etaj) {
        this.etaj = etaj;
    }

    public Integer getSuprafata() {
        return suprafata;
    }

    public void setSuprafata(Integer suprafata) {
        this.suprafata = suprafata;
    }

    public Integer getNrBai() {
        return nrBai;
    }

    public void setNrBai(Integer nrBai) {
        this.nrBai = nrBai;
    }

    public Integer getTipImobil() {
        return tipImobil;
    }

    public void setTipImobil(Integer tipImobil) {
        this.tipImobil = tipImobil;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }


    public Map<Date, ArrayList<Float>> getIstoricPreturi() {
        return istoricPreturi;
    }

    public void setIstoricPreturi(Map<Date, ArrayList<Float>> istoricPreturi) {
        this.istoricPreturi = istoricPreturi;
    }

    public Map<Date, Integer> getIstoricFavorite() {
        return istoricFavorite;
    }

    public void setIstoricFavorite(Map<Date, Integer> istoricFavorite) {
        this.istoricFavorite = istoricFavorite;
    }

    public File getImage() {
        return image;
    }

    public void setImage(File image) {
        this.image = image;
    }

    public Integer getViews() {
        return views;
    }

    public void setViews(Integer views) {
        this.views = views;
    }

    public Integer getNoOfFave() {
        return noOfFave;
    }

    public void setNoOfFave(Integer noOfFave) {
        this.noOfFave = noOfFave;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Float getPretActual() {
        return pretActual;
    }

    public void setPretActual(Float pretActual) {
        this.pretActual = pretActual;
        ArrayList<Float> newList = istoricPreturi.get(new Date());
        newList.add(pretActual);
        istoricPreturi.put(new Date(), newList);
    }
}