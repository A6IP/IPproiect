package com.hpprediction.demo.controllers;

import com.hpprediction.demo.payload.request.SignupRequest;
import com.hpprediction.demo.payload.response.MessageResponse;
import com.hpprediction.demo.service.RegistrationService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/v1")
@AllArgsConstructor
public class RegistrationController {

    private final RegistrationService registrationService;

    @PostMapping(path = "/registration")
    public ResponseEntity<MessageResponse> register(@RequestBody SignupRequest signupRequest){
        MessageResponse raspuns;

        try{
            raspuns = registrationService.registerUser(signupRequest);
        }
        catch(IllegalStateException exception){
            return new ResponseEntity<>(new MessageResponse( exception.getMessage()), HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(raspuns, HttpStatus.CREATED);
    }



}
