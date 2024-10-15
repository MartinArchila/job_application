package com.CapstoneProject.CapstoneProject.Model;

import com.CapstoneProject.CapstoneProject.Model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

public class UserPrincipal implements UserDetails { //the implementation of UserDetails interface is used to provide core user information to the security framework.
                                                    //this can also be implemented in our user class, but it is better to separate for better understanding of the code.
    private User user;

    public UserPrincipal(User user) {
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singleton(new SimpleGrantedAuthority("USER"));
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getUsername();
    }

    @Override // The method is set to return true for now, in the future we might add the functionality to check if the account is expired.
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override // The method is set to return true for now, in the future we might add the functionality to check if the account is locked.
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override // The method is set to return true for now, in the future we might add the functionality to check if the credential is expired.
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override // The method is set to return true for now, in the future we might add the functionality to check if the user is enabled or not.
    public boolean isEnabled() {
        return true;
    }
}
