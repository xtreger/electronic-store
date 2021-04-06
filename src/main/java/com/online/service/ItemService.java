package com.online.service;

import com.online.exception.ItemNotFoundException;
import com.online.exception.NoItemsFoundException;
import com.online.model.Item;

import java.util.List;

public interface ItemService {

    Item addItem(Item item);

    Item updateItem(Item item) throws ItemNotFoundException;

    Item getItem(Long id) throws ItemNotFoundException;

    List<Item> getAllItems() throws NoItemsFoundException;

    void deleteItem(Long id) throws ItemNotFoundException;

    Item updateAmount(Item item) throws ItemNotFoundException;

    Item updatePurchaseAmount(Item item) throws ItemNotFoundException;

    Item updateRating(Item item) throws ItemNotFoundException;

    String addImage(Long id, String s) throws ItemNotFoundException;


}
