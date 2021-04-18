package com.online.service;

import com.online.exception.CardNotFoundException;
import com.online.model.Payment;
import com.online.repo.PaymentRepo;
import org.springframework.stereotype.Service;


import java.util.List;

import static com.online.constant.ItemConstants.CARD_NOT_FOUND;

@Service
public class PaymentServiceImpl implements PaymentService{

    private final PaymentRepo paymentRepo;

    public PaymentServiceImpl(PaymentRepo paymentRepo) {
        this.paymentRepo = paymentRepo;
    }

    @Override
    public Payment addPayment(Payment payment) {
        payment.setCardNoDisplay(payment.getCardNo());
        return paymentRepo.save(payment);
    }


    @Override
    public void deletePayment(Long id) throws CardNotFoundException {
        Payment currentPayment = paymentRepo.findById(id).orElse(null);
        if( currentPayment == null)
            throw new CardNotFoundException(CARD_NOT_FOUND);

        paymentRepo.deleteById(id);
    }

    @Override
    public List<Payment> getAllPayments(Long id) {
        return paymentRepo.findAllByUserId(id);
    }
}
