// In our Controller class we expose our methods to the front end. We create a path for each request of out object

package com.CapstoneProject.CapstoneProject.Controller;

import com.CapstoneProject.CapstoneProject.Model.Address;
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

    @PostMapping("/createUser")
    public ResponseEntity<User> createUser(@RequestBody User user)
    {
        return service.createUser(user.getUsername(), user.getFirstName(), user.getLastName(), user.getEmail(), user.getAddress(), user.getPhoneNumber());

    }


    @PutMapping ("/updateUser/{id}/{username}/{firstName}/{lastName}/{email}/{address}/{phoneNumber}")
    public ResponseEntity<User> updateUser(@PathVariable int id,
                                           @PathVariable String username,
                                           @PathVariable String firstName,
                                           @PathVariable String lastName,
                                           @PathVariable String email,
                                           @PathVariable Address address,
                                           @PathVariable Long phoneNumber)
    {
        return service.updateUser(id, username, firstName, lastName, email, address, phoneNumber);

    }

    @DeleteMapping ("/deleteUser/{id}")
        public ResponseEntity<User> deleteUser(@PathVariable int id){
            return service.deleteUser(id);
    }
}
