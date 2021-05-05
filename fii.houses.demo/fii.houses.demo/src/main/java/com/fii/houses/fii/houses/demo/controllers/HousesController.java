package com.fii.houses.fii.houses.demo.controllers;

import com.fii.houses.fii.houses.demo.models.House;
import com.fii.houses.fii.houses.demo.models.HouseProperty;
import com.fii.houses.fii.houses.demo.service.HouseService;
import com.fii.houses.fii.houses.demo.service.UsersService;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;


import java.util.*;


@RestController
@RequestMapping("api/v1")
public class HousesController {
    @Autowired
    private HouseService service;
    @Autowired
    private UsersService usersService;

    @GetMapping("/allhouses")
    public ResponseEntity<List<House>> getHouses(@RequestParam int page){
        List<House> houses = service.getAllHousesPage(page);
        if(houses.equals(new ArrayList<>())){
            return new ResponseEntity<>(null,new HttpHeaders(),HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<>(houses, new HttpHeaders(), HttpStatus.OK);
        }
    }

    @GetMapping("/housedetails/{houseid}")
    public ResponseEntity<House> houseDetails(@PathVariable UUID houseid)
    {
        House newHouse = service.housedetails(houseid);
        if(newHouse!=null){
            return new ResponseEntity<>(newHouse,new HttpHeaders(),HttpStatus.OK);
        }else{
            return new ResponseEntity<>(null, new HttpHeaders(), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/sellerhouses/{userid}")
    public ResponseEntity<List<House>> getHouseByUserID(@PathVariable UUID userid){
        List<House> existingHouses = service.getHouseByUserID(userid);
        if(existingHouses.equals(new ArrayList<>())){
            return new ResponseEntity<>(null,new HttpHeaders(),HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<>(existingHouses, new HttpHeaders(),HttpStatus.OK);
        }
    }

    @GetMapping("/houseviews/{houseId}")
    public ResponseEntity<String> getHouseViews(@PathVariable UUID houseId){
        String views = service.getHouseViews(houseId);
        if(views==null) {
            return new ResponseEntity<>(null, new HttpHeaders(), HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(views, new HttpHeaders(), HttpStatus.OK);
        }
    }

    @Autowired
    private RestTemplate restTemplate;

    /*@GetMapping
    private House getHousePrice(){
        House house = restTemplate.getForObject("https://finalprice.herokuapp.com/price",House.class,);
        return house;
    }*/

    @PostMapping("/create2")
    public ResponseEntity<House> createHouse2(@RequestBody House house) {
        House newHouse = service.createHouse(house);
        if(newHouse == null){
            return new ResponseEntity<>(null, new HttpHeaders(), HttpStatus.BAD_REQUEST);
        }else{
            return new ResponseEntity<>(newHouse, new HttpHeaders(), HttpStatus.OK);
        }
    }

    @PostMapping("/create")
    public ResponseEntity<HouseProperty> createHouse(@RequestBody House house) throws UnirestException {
//        House newHouse=service.createHouse(house);
        //pret

        /*HttpResponse<String> httpResponse = Unirest.get("https://finalprice.herokuapp.com/price?tip_proprietate=APT&nr_camere=4&suprafata=50&suprafata_teren=50&an_constructie=2016&zona=copou")
        .asString();
        System.out.println(httpResponse);*/

        /*ResponseEntity<Object[]> responseEntity = restTemplate.getForEntity(urlGETList, Object[].class);
        Object[] objects = responseEntity.getBody();
        MediaType contentType = responseEntity.getHeaders().getContentType();
        HttpStatus statusCode = responseEntity.getStatusCode();*/

       /* HouseProperty houseProperty1 = new HouseProperty();
        houseProperty1.setNr_camere(4);
        houseProperty1.setAn_constructie(2016);
        houseProperty1.setSuprafata(50F);
        houseProperty1.setTip_proprietate("APT");
        houseProperty1.setSuprafata_teren(50F);
        houseProperty1.setZona("copou");
        ResponseEntity<HouseProperty> houseResponse =
                restTemplate.exchange("https://finalprice.herokuapp.com/price?tip_proprietate=APT&nr_camere=4&suprafata=50&suprafata_teren=50&an_constructie=2016&zona=copou",
                        HttpMethod.GET, houseProperty1, new ParameterizedTypeReference<>() {
                        });
        HouseProperty houseProperty = houseResponse.getBody();*/

        HttpHeaders requestHeaders = new HttpHeaders();
        requestHeaders.setContentType(MediaType.APPLICATION_JSON);
        requestHeaders.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));

        HouseProperty houseProperty1 = new HouseProperty();
        houseProperty1.setNr_camere(4);
        houseProperty1.setAn_constructie(2016);
        houseProperty1.setSuprafata(50F);
        houseProperty1.setTip_proprietate("APT");
        houseProperty1.setSuprafata_teren(50F);
        houseProperty1.setZona("copou");

        JSONObject houseJsonObject = new JSONObject();
        houseJsonObject.put("nr_camere", 4);
        houseJsonObject.put("an_constructie", 2016);
        houseJsonObject.put("suprafata",50F);
        houseJsonObject.put("tip_proprietate", "APT");
        houseJsonObject.put("suprafata_teren", 50F);
        houseJsonObject.put("zona","copou");

        HttpEntity<String> request =
                new HttpEntity<>(houseJsonObject.toString(),requestHeaders);

        //request entity is created with request body and headers
//        HttpEntity<HouseProperty> requestEntity = new HttpEntity<>(houseProperty1, requestHeaders);

        ResponseEntity<HouseProperty> responseEntity = restTemplate.exchange(
                "https://finalprice.herokuapp.com/price",
                HttpMethod.GET,
                request,
                HouseProperty.class
        );

        HouseProperty houseProperty = new HouseProperty();
        if(responseEntity.getStatusCode() == HttpStatus.OK){
            houseProperty = responseEntity.getBody();
            System.out.println("user response retrieved ");
        }

        /*restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        JSONObject houseJsonObject = new JSONObject();
        houseJsonObject.put("nr_camere", 4);
        houseJsonObject.put("an_constructie", 2016);
        houseJsonObject.put("suprafata",50F);
        houseJsonObject.put("tip_proprietate", "APT");
        houseJsonObject.put("suprafata_teren", 50F);
        houseJsonObject.put("zona","copou");
        HttpEntity<String> request =
                new HttpEntity<String>(houseJsonObject.toString(),headers);
        String houseResultAsJsonStr =
                restTemplate.getForObject("https://finalprice.herokuapp.com/price", String.class, houseJsonObject);*/

        /*String result = restTemplate.getForObject("https://finalprice.herokuapp.com/price?tip_proprietate=APT&nr_camere=4&suprafata=50&suprafata_teren=50&an_constructie=2016&zona=copou", String.class);
        System.out.println(result);*/

        return new ResponseEntity<>(houseProperty,new HttpHeaders(),HttpStatus.CREATED);
    }

    @PostMapping("/update")
    public ResponseEntity<House> updateHouse(@RequestBody House house)
    {
        House existingHouse=service.updateHouse(house);
        if(existingHouse==null){
            return new ResponseEntity<>(new HttpHeaders(),HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<>(existingHouse,new HttpHeaders(),HttpStatus.OK);
        }
    }

    @PostMapping("/delete/{houseid}")
    public ResponseEntity<String> deleteHouse(@PathVariable UUID houseid)
    {
        if(service.deleteHouse(houseid)){
            return new ResponseEntity<>(new HttpHeaders(),HttpStatus.OK);
        }else {
            return new ResponseEntity<>(new HttpHeaders(),HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/{houseid}")
    public ResponseEntity<String> views(@PathVariable UUID houseid)
    {
        if(service.updateViews(houseid)){
            return new ResponseEntity<>(new HttpHeaders(),HttpStatus.OK);
        }else{
            return new ResponseEntity<>(new HttpHeaders(), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/lastadded")
    public ResponseEntity<List<House>> lastAddedHouses(){
        List<House> houses = service.lastAddedHouses();
        if(houses.equals(new ArrayList<>())){
            return new ResponseEntity<>(new HttpHeaders(),HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<>(houses, new HttpHeaders(), HttpStatus.OK);
        }
    }

    //the words will be separated through "-"
    @GetMapping("/filter/bysearch/{words}")
    public ResponseEntity<List<House>> searchInAddressAndDescription(@PathVariable String words){
        List<House> houses = service.searchByWords(words);
        if(houses.isEmpty()){
            return new ResponseEntity<>(new HttpHeaders(), HttpStatus.NOT_FOUND);
        }else{
            return new ResponseEntity<>(houses, new HttpHeaders(), HttpStatus.OK);
        }
    }

    @GetMapping("/filter/byfields")
    public ResponseEntity <List<House>> searchInFields(@RequestParam(required=false) Integer houseType,
                                                       @RequestParam(required=false) Integer sellType,
                                                       @RequestParam(required=false) String city,
                                                       @RequestParam(required=false) String country,
                                                       @RequestParam(required=false) Integer noOfRooms,
                                                       @RequestParam(required=false) Integer floor,
                                                       @RequestParam(required=false) Integer surface,
                                                       @RequestParam(required=false) Integer noOfBathrooms){

        List<House> houses = service.searchByFields(houseType, sellType, city, country, noOfRooms, floor, surface, noOfBathrooms);

        if(houses.isEmpty()){
            return new ResponseEntity<>( new HttpHeaders(), HttpStatus.NOT_FOUND);
        }else{
            return new ResponseEntity<>(houses, new HttpHeaders(), HttpStatus.OK);
        }
    }
}


