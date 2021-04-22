package com.fii.houses.fii.houses.demo.controllers;

import com.fii.houses.fii.houses.demo.models.HousePhotos;
import com.fii.houses.fii.houses.demo.service.HousePhotosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/housesPhotos")
public class HousesPhotosController {
    @Autowired
    private HousePhotosService housePhotosService;

    @PostMapping("/create")
    public ResponseEntity<HousePhotos> storePhoto(@RequestParam("file") MultipartFile file, @RequestParam("houseID") UUID houseID) throws IOException {
        HousePhotos housePhoto = housePhotosService.store(file,houseID);
        return new ResponseEntity<>(housePhoto,new HttpHeaders(), HttpStatus.CREATED);
    }

    @GetMapping("/{houseID}")
    public List<HousePhotos> getPhotosFromHouseID(@PathVariable UUID houseID){
        return housePhotosService.getPhotosFromHouseID(houseID);
    }
}
