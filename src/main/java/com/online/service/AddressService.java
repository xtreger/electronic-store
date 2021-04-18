package com.online.service;

import com.online.exception.AddressNotFoundException;
import com.online.model.Address;
import com.online.model.Payment;

import java.util.List;

public interface AddressService {

    Address addAddress(Address address);

    void deleteAddress(Long id) throws AddressNotFoundException;

    Address updateAddress(Address address) throws AddressNotFoundException;

    List<Address> getAllAddresses(Long id);

}
