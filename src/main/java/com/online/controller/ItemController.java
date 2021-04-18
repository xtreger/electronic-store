package com.online.controller;

import com.online.exception.CartItemNotFoundException;
import com.online.exception.ExceptionHandling;
import com.online.exception.ItemNotFoundException;
import com.online.exception.NoItemsFoundException;
import com.online.model.CartItem;
import com.online.model.Comment;
import com.online.model.Item;
import com.online.model.OrderItem;
import com.online.service.CartItemService;
import com.online.service.CommentService;
import com.online.service.ItemService;
import com.online.service.OrderItemService;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ItemController extends ExceptionHandling {

    private final ItemService itemService;
    private final CommentService commentService;
    private final CartItemService cartItemService;
    private final OrderItemService orderItemService;

    @Autowired
    public ItemController(ItemService itemService, CommentService commentService, CartItemService cartItemService, OrderItemService orderItemService) {
        this.itemService = itemService;
        this.commentService = commentService;
        this.cartItemService = cartItemService;
        this.orderItemService = orderItemService;
    }


    @PostMapping("/addItem")
    public Item addItem(@RequestBody Item item) {
        return itemService.addItem(item);
    }

    @GetMapping("/getItems")
    public List<Item> findAllItems() throws NoItemsFoundException {
        return itemService.getAllItems();
    }

    @GetMapping("/findItemById/{id}")
    public Item getItemById(@PathVariable Long id) throws ItemNotFoundException {
        return itemService.getItem(id);
    }

    @PutMapping("/updateItem")
    public Item updateItem(@RequestBody Item item) throws ItemNotFoundException {
        return itemService.updateItem(item);
    }

    @DeleteMapping("/deleteItem/{id}")
    public Long deleteItem(@PathVariable Long id) throws ItemNotFoundException {
         itemService.deleteItem(id);
         return id;
    }


    @PutMapping("/updateAmount")
    public Item updateAmount(@RequestBody Item item) throws ItemNotFoundException {
        return itemService.updateAmount(item);
    }

    @PutMapping("/updatePurchaseAmount")
    public Item updatePurchaseAmount(@RequestBody Item item) throws ItemNotFoundException {
        return itemService.updatePurchaseAmount(item);
    }


    @PutMapping("/updateRating")
    public Item updateRating(@RequestBody Item item) throws ItemNotFoundException {
        return itemService.updateRating(item);
    }

    @PostMapping("/addImage/{id}")
    @ResponseBody
    public String addImage(@PathVariable("id") Long id, @RequestParam("imageFile") MultipartFile image) throws IOException, ItemNotFoundException {

        String s = new String(Base64.encodeBase64(image.getBytes()), StandardCharsets.UTF_8);

        return itemService.addImage(id,s);
    }

    @PostMapping("/addComment")
    public Comment addComment(@RequestBody Comment comment) {
        return commentService.addComment(comment);
    }

    @PostMapping("/addCartItem")
    public CartItem addCartItem(@RequestBody CartItem cartItem) {
        return cartItemService.addCartItem(cartItem);
    }

    @DeleteMapping("/deleteCartItem/{id}")
    public Long deleteCartItem(@PathVariable Long id) throws CartItemNotFoundException {
        cartItemService.deleteCartItem(id);
        return id;
    }

    @GetMapping("/getCartItems/{id}")
    public List<CartItem> getCartItems(@PathVariable Long id) throws CartItemNotFoundException {
        return cartItemService.getCartItems(id);
    }

    @PostMapping("/addOrderItems")
    public OrderItem addOrderItems(@RequestBody OrderItem orderItem) {
        return orderItemService.addOrderItem(orderItem);
    }

    @GetMapping("/getOrderItems/{id}")
    public List<OrderItem> getOrderItems(@PathVariable Long id){
        return orderItemService.getOrderItems(id);
    }


}
