package com.online.repo;

import com.online.model.CartItem;
import com.online.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentRepo extends JpaRepository<Payment, Long> {

    List<Payment> findAllByUserId(Long userId);
}
