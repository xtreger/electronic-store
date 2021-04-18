package com.online.service;

import com.online.exception.CartItemNotFoundException;
import com.online.model.CartItem;
import com.online.repo.CartItemRepo;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.online.constant.ItemConstants.ITEM_NOT_FOUND;

@Service
public class CartItemServiceImpl implements CartItemService{

    private final CartItemRepo cartItemRepo;

    public CartItemServiceImpl(CartItemRepo cartItemRepo) {
        this.cartItemRepo = cartItemRepo;
    }

    @Override
    public CartItem addCartItem(CartItem cartItem) {
        return cartItemRepo.save(cartItem);
    }

    @Override
    public void deleteCartItem(Long id) throws CartItemNotFoundException {
        CartItem currentCartItem = cartItemRepo.findById(id).orElse(null);
        if (currentCartItem == null) {
            throw new CartItemNotFoundException(ITEM_NOT_FOUND);
        }
        cartItemRepo.deleteById(currentCartItem.getId());
    }

    @Override
    public List<CartItem> getCartItems(Long userId) throws CartItemNotFoundException {
        return cartItemRepo.findAllByUserId(userId);
    }
}
