package com.online.service;

import com.online.exception.CartItemNotFoundException;
import com.online.model.CartItem;

import java.util.List;

public interface CartItemService {

    CartItem addCartItem(CartItem cartItem);

    void deleteCartItem(Long id) throws CartItemNotFoundException;

    List<CartItem> getCartItems(Long userId) throws CartItemNotFoundException;
}
