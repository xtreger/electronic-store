package com.online.service;

import com.online.exception.AddressNotFoundException;
import com.online.model.Address;

public interface AddressService {

    Address addAddress(Address address);

    void deleteAddress(Long id) throws AddressNotFoundException;

    Address updateAddress(Address address) throws AddressNotFoundException;

}
