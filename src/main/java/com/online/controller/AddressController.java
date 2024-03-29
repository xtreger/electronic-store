package com.online.controller;

import com.online.exception.AddressNotFoundException;
import com.online.exception.CartItemNotFoundException;
import com.online.exception.ExceptionHandling;
import com.online.model.Address;
import com.online.model.CartItem;
import com.online.service.AddressService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AddressController extends ExceptionHandling {

    private final AddressService addressService;

    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }

    @PostMapping("/addAddress")
    public Address addAddress(@RequestBody Address address){
        return addressService.addAddress(address);
    }

    @PutMapping("/updateAddress")
    public Address updateAddress(@RequestBody Address address) throws AddressNotFoundException {
        return addressService.updateAddress(address);
    }

    @DeleteMapping("/deleteAddress/{id}")
    public Long deleteAddress(@PathVariable Long id) throws AddressNotFoundException{
        addressService.deleteAddress(id);
        return id;
    }

    @GetMapping("/getAddresses/{id}")
    public List<Address> getCartItems(@PathVariable Long id) {
        return addressService.getAllAddresses(id);
    }


}
