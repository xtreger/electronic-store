package com.online.exception;

public class CartItemNotFoundException extends Exception {
    public CartItemNotFoundException(String message) {
        super(message);
    }
}
