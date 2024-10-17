// In our Controller class we expose our methods to the front end. We create a path for each request of out object

package com.CapstoneProject.CapstoneProject.Controller;

import com.CapstoneProject.CapstoneProject.Model.User;
import com.CapstoneProject.CapstoneProject.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")

public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/createUser")
    public ResponseEntity<User> createUser(@RequestBody User user)
    {
        return service.createUser(user.getUsername(), user.getPassword(), user.getFirstName(), user.getLastName(), user.getEmail(), user.getAddress(), user.getPhoneNumber());

    }

    @PutMapping ("/updateUser/")  // not actualized method
    public ResponseEntity<User> updateUser(@RequestBody User user)
    {
        return service.updateUser(user.getUserID(), user.getUsername(), user.getPassword(), user.getFirstName(), user.getLastName(), user.getEmail(), user.getAddress(), user.getPhoneNumber());

    }

    @DeleteMapping ("/deleteUser/{id}") // not actualized method
        public ResponseEntity<User> deleteUser(@PathVariable int id){
            return service.deleteUser(id);
    }

    @PostMapping("/verify")
        public ResponseEntity<String> verify(@RequestBody User user){
            return service.verify(user.getUsername(), user.getPassword());
    }

    @PutMapping("/updatePassword")
        public ResponseEntity<User> updatePassword(@RequestBody User user){
            return service.updatePassword(user.getPassword());
    }
}
