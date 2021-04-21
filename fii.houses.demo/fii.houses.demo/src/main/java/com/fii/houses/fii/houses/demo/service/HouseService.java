package com.fii.houses.fii.houses.demo.service;

import com.fii.houses.fii.houses.demo.models.House;
import com.fii.houses.fii.houses.demo.models.User;
import com.fii.houses.fii.houses.demo.repository.HouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

class SortByDate implements Comparator<House> {

    @Override
    public int compare(House o1, House o2) {
        return o1.getCreationDate().compareTo(o2.getCreationDate());
    }
}

@Service
public class HouseService {
    @Autowired
    private HouseRepository repository;

    public List<House> getAllHouses() {
        List<House> houses = repository.findAll();
        if (houses.size() > 0) {
            return houses;
        } else {
            return new ArrayList<>();
        }
    }

    public Optional<House> getHouseById(UUID id){
        Optional<House> house = repository.findById(id);
        return house;
    }

    public List<House> getHouseByHouseID(House house){
        UUID id = house.getHouseID();
        List<House> houses = repository.findAll();
        List<House> goodHouses = new ArrayList<>();
        for (House house1 : houses) {
            if (house1.getHouseID().equals(id)) {
                goodHouses.add(house1);
            }
        }
        if(goodHouses.size()>=1){
            return goodHouses;
        }else {
            return new ArrayList<>();
        }
    }

    public List<House> getHouseByAdress(House house){
        List<House> goodHouses = new ArrayList<>();
        List<House> houses = repository.findAll();
        String adress = house.getAdress();
        for (House house1 : houses) {
            if (house1.getAdress().equals(adress)) {
                goodHouses.add(house1);
            }
        }
        if(goodHouses.size()>=1){
            return goodHouses;
        }else {
            return new ArrayList<>();
        }
    }

    public List<House> getHouseByUserID(House house){
        UUID id = house.getUserID();
        List<House> houses = repository.findAll();
        List<House> goodHouses = new ArrayList<>();
        for (House house1 : houses) {
            if (house1.getUserID().equals(id)) {
                goodHouses.add(house1);
            }
        }
        if(goodHouses.size()>=1){
            return goodHouses;
        }else {
            return new ArrayList<>();
        }
    }

    public String getHouseViews(House house){
        UUID id = house.getHouseID();
        if(repository.existsById(id)){
            House houseViwes = repository.getOne(id);
            return houseViwes.getViews().toString();
        }
        return null;
    }

    public boolean updateViews(UUID houseid){
        if(repository.existsById(houseid)){
            House house1 = repository.getOne(houseid);
            int views = house1.getViews();
            house1.setViews(views+1);
            repository.save(house1);
            return true;
        }
        return false;
    }

    public List<House> lastNineHouse(){
        List<House> allHouses = repository.findAll();
        allHouses.sort(new SortByDate());
        List<House> goodHouses = new ArrayList<>();
        int houses = Math.min(allHouses.size(), 9);
        for (int index = 0; index < houses; index++) {
            goodHouses.add(allHouses.get(index));
        }
        if (goodHouses.size() > 0) {
            return goodHouses;
        } else {
            return new ArrayList<>();
        }
    }

    public House createHouse(House house) {
        house.setHouseID(UUID.randomUUID());
        house.setCreationDate(new Date());
        house.setViews(0);
        house=repository.save(house);
        return house;
    }

    public House updateHouse(House house) {
        UUID id = house.getHouseID();
        if(repository.existsById(id)){
            House updateHouse = repository.getOne(id);
            house.setCreationDate(new Date());
            if(house.getAdress()!=null)
                updateHouse.setAdress(house.getAdress());
            if(house.getCity()!=null)
                updateHouse.setCity(house.getCity());
            if(house.getCountry()!=null)
                updateHouse.setCountry(house.getCountry());
            if(house.getEtaj()!=null)
                updateHouse.setEtaj(house.getEtaj());
            if(house.getNrBai()!=null)
                updateHouse.setNrBai(house.getNrBai());
            if(house.getNrCamere()!=null)
                updateHouse.setNrCamere(house.getNrCamere());
            if(house.getSuprafata()!=null)
                updateHouse.setSuprafata(house.getSuprafata());
            if(house.getHouseType()!=null){
                updateHouse.setHouseType(house.getHouseType());
            }
            if(house.getSellType()!=null){
                updateHouse.setSellType(house.getSellType());
            }
            if(house.getDescription()!=null) {
                updateHouse.setDescription(house.getDescription());
            }
            house=repository.save(updateHouse);
            return house;
        }else
            return null;
    }

    public boolean deleteHouse(House house) {
        UUID id = house.getHouseID();
        if(repository.existsById(id)){
            repository.deleteById(id);
            return true;
        }else {
            return false;
        }
    }

    public List<House> searchByWords(String words){
        List<House> allHouses = this.getAllHouses();
        List<House> housesTemp;
        Map<Integer, List<House>> wordsMatched = new TreeMap<>();
        String[] arrOfWords = words.split("-", 0);
        Integer counterMatches;
        //populate the map wordsMarched: for a number of matches we have a list of houses
        for(House house : allHouses){
            counterMatches = 0;
            for(String word : arrOfWords){
                if(house.getDescription() != null){
                    if(house.getDescription().contains(word)){
                        counterMatches++;
                    }
                }
                if(house.getAdress() != null){
                    if(house.getAdress().contains(word)){
                        counterMatches++;
                    }
                }
            }
            if(counterMatches != 0){
                if(wordsMatched.containsKey(counterMatches)){
                    housesTemp = wordsMatched.get(counterMatches);
                }else{
                    housesTemp = new ArrayList<>();
                }
                housesTemp.add(house);
                wordsMatched.put(counterMatches, housesTemp);
            }
        }
        //sort descendind by number of matches
        Map<Integer, List<House>> reverseSortedMap = new TreeMap<Integer, List<House>>(Collections.reverseOrder());

        reverseSortedMap.putAll(wordsMatched);

        List<House> houses = new ArrayList<>();
        for (Map.Entry<Integer, List<House>> entry :reverseSortedMap.entrySet()) {
            housesTemp = entry.getValue();
            houses.addAll(housesTemp);
        }
        return houses;
    }

    public List<House> searchByFields(Integer houseType,Integer sellType, String city,String country,
                                      Integer nrCamere,Integer etaj, Integer suprafata, Integer nrBai){

        List<House> allHouses = this.getAllHouses();
        List<House> houses = new ArrayList<>();

        for(House house : allHouses){
            if((houseType == null || house.getHouseType().equals(houseType)) &&
                    (sellType == null || house.getSellType().equals(sellType)) &&
                    (city == null || house.getCity().equals(city)) &&
                    (country == null || house.getCountry().equals(country)) &&
                    (nrCamere == null || house.getNrCamere().equals(nrCamere)) &&
                    (etaj == null || house.getEtaj().equals(etaj)) &&
                    (suprafata == null || house.getSuprafata().equals(suprafata)) &&
                    (nrBai == null || house.getNrBai().equals(nrBai))) {
                houses.add(house);
            }
        }
        return houses;
    }
}


