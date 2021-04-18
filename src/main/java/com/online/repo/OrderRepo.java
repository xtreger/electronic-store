package com.online.repo;

import com.online.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepo extends JpaRepository<OrderItem, Long> {

    List<OrderItem> findAllByUserId(Long userId);
}
