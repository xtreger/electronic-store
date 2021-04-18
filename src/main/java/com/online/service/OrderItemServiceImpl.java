package com.online.service;

import com.online.model.OrderItem;
import com.online.repo.OrderRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderItemServiceImpl implements OrderItemService{

    private final OrderRepo orderRepo;

    public OrderItemServiceImpl(OrderRepo orderRepo) {
        this.orderRepo = orderRepo;
    }

    @Override
    public OrderItem addOrderItem(OrderItem orderItem) {
        return orderRepo.save(orderItem);
    }

    @Override
    public List<OrderItem> getOrderItems(Long userId) {
        return orderRepo.findAllByUserId(userId);
    }
}
