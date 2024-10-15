package com.CapstoneProject.CapstoneProject.Repository;

import com.CapstoneProject.CapstoneProject.Model.Address;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepo extends CrudRepository<Address, Integer> {
    

}
