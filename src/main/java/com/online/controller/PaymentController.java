package com.online.controller;

import com.online.exception.CardNotFoundException;
import com.online.exception.ExceptionHandling;
import com.online.model.Payment;
import com.online.service.PaymentService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PaymentController extends ExceptionHandling {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/addPayment")
    public Payment addPayment(@RequestBody Payment payment){
        return paymentService.addPayment(payment);
    }

    @DeleteMapping("/deletePayment/{id}")
    public Long deletePayment(@PathVariable Long id) throws CardNotFoundException {
        paymentService.deletePayment(id);
        return id;
    }
}
