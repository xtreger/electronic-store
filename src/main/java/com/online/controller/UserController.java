package com.online.controller;

import com.online.exception.DuplicateEmailException;
import com.online.exception.EmailNotFoundException;
import com.online.exception.ExceptionHandling;
import com.online.jwt.JWTTokenProvider;
import com.online.model.User;
import com.online.model.UserPrincipal;
import com.online.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import static com.online.constant.SecurityConstants.TIME;

@RestController
@RequestMapping("/api")
public class UserController extends ExceptionHandling {

    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final JWTTokenProvider jwtTokenProvider;


    @Autowired
    public UserController(UserService userService, AuthenticationManager authenticationManager, JWTTokenProvider jwtTokenProvider) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @PostMapping("/register")
    @ResponseBody
    public ResponseEntity<User> register(@RequestBody User user) throws DuplicateEmailException {

        return ResponseEntity.ok(userService.register(user));
    }

    @PostMapping("/login")
    @ResponseBody
    public ResponseEntity<User> login(@RequestBody User user) throws EmailNotFoundException {
        authenticate(user.getEmail(), user.getPassword());
        User loggedUser = userService.findUserByEmail(user.getEmail());
        UserPrincipal userPrincipal = new UserPrincipal(loggedUser);

        loggedUser.setToken(jwtTokenProvider.generateJwtToken(userPrincipal));
        loggedUser.setExpiresIn(TIME);

        return new ResponseEntity<>(loggedUser, HttpStatus.OK);
    }


    private void authenticate(String username, String password) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
    }
}
