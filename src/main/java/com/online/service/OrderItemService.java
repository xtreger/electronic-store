package com.online.service;

import com.online.model.OrderItem;

import java.util.List;

public interface OrderItemService {

    OrderItem addOrderItem(OrderItem orderItem);

    List<OrderItem> getOrderItems(Long userId);
}
