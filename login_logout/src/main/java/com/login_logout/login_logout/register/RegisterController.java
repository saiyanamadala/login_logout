package com.login_logout.login_logout.register;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
public class RegisterController {


    private RegisterRepo registerRepo;

    public RegisterController(RegisterRepo registerRepo) {
        this.registerRepo = registerRepo;
    }

    @GetMapping(path = "/findbyid/{id}")
    public Register retrieveById(@PathVariable int id){

        return registerRepo.findById(id).get();
    }

    @PostMapping(path="/register/{userName}")
    public Register registerNewUser(@PathVariable String userName, @RequestBody Register data){
        return registerRepo.save(data);
    }

    @GetMapping(path = "/hello")
    public String hello(){
        return "hello";
    }

//    @PutMapping(path="/register/{userName}")
//    public String updateUser(@PathVariable String userName, @RequestBody Register data){
//        registerServ.updateUser(userName,data);
//    }

}
