package com.online.service;

import com.google.gson.Gson;
import com.online.exception.ItemNotFoundException;
import com.online.exception.NoItemsFoundException;
import com.online.model.Item;
import com.online.repo.ItemRepo;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.online.constant.ItemConstants.ITEM_NOT_FOUND;
import static com.online.constant.ItemConstants.NO_ITEMS;

@Service
public class ItemServiceImpl implements ItemService {

    private final ItemRepo itemRepo;

    public ItemServiceImpl(ItemRepo itemRepo) {
        this.itemRepo = itemRepo;
    }

    @Override
    public Item addItem(Item item) {

        return itemRepo.save(item);
    }

    @Override
    public Item updateItem(Item item) throws ItemNotFoundException {


        Item currentItem = itemRepo.findById(item.getId()).orElse(null);
        if (currentItem == null) {
            throw new ItemNotFoundException(ITEM_NOT_FOUND);
        }
        currentItem.setAmount(item.getAmount());
        currentItem.setCategory(item.getCategory());
        currentItem.setDescription(item.getDescription());
        currentItem.setImage(item.getImage());
        currentItem.setManufacturer(item.getManufacturer());
        return itemRepo.save(currentItem);
    }

    @Override
    public Item getItem(Long id) throws ItemNotFoundException {

        Item currentItem = itemRepo.findById(id).orElse(null);
        if (currentItem == null) {
            throw new ItemNotFoundException(ITEM_NOT_FOUND);
        }
        return currentItem;
    }

    @Override
    public List<Item> getAllItems() throws NoItemsFoundException {

        if (itemRepo.count() < 1) {
            throw new NoItemsFoundException(NO_ITEMS);
        }
        return itemRepo.findAll();
    }

    @Override
    public void deleteItem(Long id) throws ItemNotFoundException {

        Item currentItem = getItem(id);
        itemRepo.deleteById(currentItem.getId());
    }

    @Override
    public Item updateAmount(Item item) throws ItemNotFoundException {

        Item currentItem = getItem(item.getId());

        currentItem.setAmount(item.getAmount());
        return itemRepo.save(currentItem);

    }

    @Override
    public Item updatePurchaseAmount(Item item) throws ItemNotFoundException {

        Item currentItem = getItem(item.getId());
        currentItem.setAmount(currentItem.getAmount() - item.getAmount());
        return itemRepo.save(currentItem);

    }

    @Override
    public Item updateRating(Item item) throws ItemNotFoundException {

        Item currentItem = getItem(item.getId());
        currentItem.setRating(currentItem.getRating() + item.getRating());
        currentItem.setRatingsAmount(currentItem.getRatingsAmount() + 1);
        return itemRepo.save(currentItem);
    }

    @Override
    public String addImage(Long id,String s) throws ItemNotFoundException {
        Item currentItem = getItem(id);
        currentItem.setImage(s);
        itemRepo.save(currentItem);
        return new Gson().toJson("Success");


    }

}
