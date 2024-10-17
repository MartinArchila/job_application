package com.CapstoneProject.CapstoneProject.Service;

import com.CapstoneProject.CapstoneProject.Model.User;
import com.CapstoneProject.CapstoneProject.Model.UserPrincipal;
import com.CapstoneProject.CapstoneProject.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;


@Service
public class UserPrincipalService implements UserDetailsService {

    @Autowired
    private UserRepo userRepo;

    @Override
    //this method is used to load the user by username, it is used by the security framework to authenticate the user.
    public UserDetails loadUserByUsername(String username){
        User user = userRepo.findByUsername(username);
        if(user == null){
            throw new RuntimeException("User not found");
        }

        return new UserPrincipal(user);
    }
}
