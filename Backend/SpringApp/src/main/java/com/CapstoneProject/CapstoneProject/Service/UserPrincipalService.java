package com.CapstoneProject.CapstoneProject.Service;

import com.CapstoneProject.CapstoneProject.Model.User;
import com.CapstoneProject.CapstoneProject.Model.UserPrincipal;
import com.CapstoneProject.CapstoneProject.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserPrincipalService implements UserDetailsService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String username){
        User user = userRepo.findByUsername(username);
        if(user == null){
            throw new RuntimeException("User not found");
        }

        return new UserPrincipal(user);
    }
}
