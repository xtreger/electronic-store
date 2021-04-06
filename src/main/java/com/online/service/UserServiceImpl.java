package com.online.service;

import com.online.exception.DuplicateEmailException;
import com.online.exception.EmailNotFoundException;
import com.online.model.User;
import com.online.model.UserPrincipal;
import com.online.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import static com.online.constant.UserConstants.EMAIL_ALREADY_EXISTS;
import static com.online.constant.UserConstants.NO_USER_FOUND_BY_EMAIL;
import static com.online.enums.Role.ROLE_USER;

@Service
@Qualifier("UserDetailsService")
public class UserServiceImpl implements UserService, UserDetailsService {

    private final BCryptPasswordEncoder passwordEncoder;
    private final UserRepo userRepo;

    @Autowired
    public UserServiceImpl(BCryptPasswordEncoder passwordEncoder, UserRepo userRepo) {
        this.passwordEncoder = passwordEncoder;
        this.userRepo = userRepo;
    }


    @Override
    public User findUserByEmail(String email) throws EmailNotFoundException {
        User currentUser = userRepo.findByEmail(email);
        if (currentUser == null) {
            throw new EmailNotFoundException(NO_USER_FOUND_BY_EMAIL);
        }
        return userRepo.findByEmail(email);
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = null;
        try {
            user = findUserByEmail(username);
        } catch (EmailNotFoundException e) {
            e.printStackTrace();
        }
        return new UserPrincipal(user);
    }

    @Override
    public User login(User user) throws EmailNotFoundException {

        return findUserByEmail(user.getEmail());
    }

    @Override
    public User register(User user) throws DuplicateEmailException {

        if (userRepo.existsByEmail(user.getEmail() )){
            throw new DuplicateEmailException(EMAIL_ALREADY_EXISTS);
        }

        String encodedPassword = encodePassword(user.getPassword());
        user.setPassword(encodedPassword);
        user.setRole(ROLE_USER.name());
        user.setPrivileges(ROLE_USER.getAuthorities());

        return userRepo.save(user);
    }

    private String encodePassword(String password) {
        return passwordEncoder.encode(password);
    }

}