package com.online.repo;

import com.online.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
    User findByEmail(String email);

    boolean existsByEmail(String email);

}
