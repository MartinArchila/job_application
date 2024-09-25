package com.CapstoneProject.CapstoneProject.Service;

import com.CapstoneProject.CapstoneProject.Model.Address;
import com.CapstoneProject.CapstoneProject.Model.User;
import com.CapstoneProject.CapstoneProject.Repository.AddressRepo;
import com.CapstoneProject.CapstoneProject.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

// In the user service is located the business logic, every method that the object is going to use must be in the object Service.

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private AddressRepo addressRepo;

    //Error Checking: Allow multiple accounts with the same email?
    public ResponseEntity<User> createUser(String username,
                                     String firstName,
                                     String lastName,
                                     String email,
                                     Address address,
                                     Long phoneNumber)
    {
        Address address1 = new Address(address.getStreet(), address.getCity(), address.getState(), address.getZipCode(), address.getCountry());

        User user = new User(username, firstName, lastName, email, address1, phoneNumber);

        Optional<User> emailExists = userRepo.findByEmail(email);

        if(emailExists.isPresent()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).header("Error", "Email already exists").body(user);
        }

        addressRepo.save(address1);
        userRepo.save(user);

        return ResponseEntity.status(HttpStatus.CREATED).header("Success", "User has been created").body(user);
    }

    public ResponseEntity<User> updateUser(int id,
                                           String username,
                                           String firstName,
                                           String lastName,
                                           String email,
                                           Address address,
                                           Long phoneNumber)
    {
        User user = new User(id, username, firstName, lastName, email, address, phoneNumber);

        if(!userRepo.existsById(id))
            return ResponseEntity.status(HttpStatus.NOT_FOUND).header("Error", "Id not found").body(user);

        userRepo.save(user);

        return ResponseEntity.status(HttpStatus.OK).header("Success", "User has been modified").body(user);
    }

    public ResponseEntity<User> deleteUser(int id){
        userRepo.deleteById(id);

        return ResponseEntity.status(HttpStatus.OK).header("Success", "User has been deleted").body(new User());
    }

}
