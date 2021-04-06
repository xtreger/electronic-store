package com.online.service;
import com.online.exception.CardNotFoundException;
import com.online.model.Payment;


public interface PaymentService {

    Payment addPayment(Payment payment);

    void deletePayment(Long id) throws CardNotFoundException;
}
