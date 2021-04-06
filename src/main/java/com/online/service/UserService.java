package com.online.service;

import com.online.exception.DuplicateEmailException;
import com.online.exception.EmailNotFoundException;
import com.online.model.User;

public interface UserService {

    public User login(User user) throws EmailNotFoundException;

    public User findUserByEmail(String email) throws EmailNotFoundException;

    User register(User user) throws DuplicateEmailException;
}
