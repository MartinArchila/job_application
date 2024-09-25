package com.CapstoneProject.CapstoneProject.Service;
import com.CapstoneProject.CapstoneProject.Model.Address;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class AddressService {

    public ResponseEntity<Address> createAddress(String street,
                                                 String city,
                                                 String state,
                                                 String zipCode,
                                                 String country)
    {
        Address address = new Address(street, city, state, zipCode, country);
        // repo method

        return ResponseEntity.status(HttpStatus.CREATED).header("Success", "The address has been created").body(address);

    }
}
