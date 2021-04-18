package com.online.service;
import com.online.exception.CardNotFoundException;
import com.online.exception.NoItemsFoundException;
import com.online.model.Item;
import com.online.model.Payment;

import java.util.List;


public interface PaymentService {

    Payment addPayment(Payment payment);

    void deletePayment(Long id) throws CardNotFoundException;

    List<Payment> getAllPayments(Long id);
}
