package com.online.repo;

import com.online.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartItemRepo extends JpaRepository<CartItem, Long> {

    List<CartItem> findAllByUserId(Long userId);
}
