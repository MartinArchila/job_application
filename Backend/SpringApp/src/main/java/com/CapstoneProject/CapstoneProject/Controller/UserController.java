package com.CapstoneProject.CapstoneProject.Controller;

import com.CapstoneProject.CapstoneProject.Model.User;
import com.CapstoneProject.CapstoneProject.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")

public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/createUser/{username}/{firstName}/{lastName}/{email}/{address}/{phoneNumber}")                // If there are multiples Post methods, we need to specify the URL path. Example @PostMappping("/createUser")
    public ResponseEntity<User> createUser(@PathVariable String username,
                                           @PathVariable String firstName,
                                           @PathVariable String lastName,
                                           @PathVariable String email,
                                           @PathVariable String address,
                                           @PathVariable Long phoneNumber)
    {
        return service.createUser(username, firstName, lastName, email, address, phoneNumber);

    }

    @PutMapping ("/updateUser/{id}/{username}/{firstName}/{lastName}/{email}/{address}/{phoneNumber}")
    public ResponseEntity<User> updateUser(@PathVariable int id,
                                           @PathVariable String username,
                                           @PathVariable String firstName,
                                           @PathVariable String lastName,
                                           @PathVariable String email,
                                           @PathVariable String address,
                                           @PathVariable Long phoneNumber)
    {
        return service.updateUser(id, username, firstName, lastName, email, address, phoneNumber);

    }

    @DeleteMapping ("/deleteUser/{id}")
        public ResponseEntity<User> deleteUser(@PathVariable int id){
            return service.deleteUser(id);
    }
}
