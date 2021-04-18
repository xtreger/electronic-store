package com.online.service;

import com.online.exception.AddressNotFoundException;
import com.online.model.Address;
import com.online.model.Address;
import com.online.repo.AddressRepo;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.online.constant.ItemConstants.ADDRESS_NOT_FOUND;

@Service
public class AddressServiceImpl implements AddressService{

    private final AddressRepo addressRepo;

    public AddressServiceImpl(AddressRepo addressRepo) {
        this.addressRepo = addressRepo;
    }

    @Override
    public Address addAddress(Address address) {
        return  addressRepo.save(address);
    }

    @Override
    public void deleteAddress(Long id) throws AddressNotFoundException {
        Address currentAddress = addressRepo.findById(id).orElse(null);
        if( currentAddress == null)
            throw new AddressNotFoundException(ADDRESS_NOT_FOUND);

        addressRepo.deleteById(id);
    }

    @Override
    public Address updateAddress(Address address) throws AddressNotFoundException {

        Address currentAddress = addressRepo.findById(address.getId()).orElse(null);
        if (currentAddress == null) {
            throw new AddressNotFoundException(ADDRESS_NOT_FOUND);
        }
        currentAddress.setFirstName(address.getFirstName());
        currentAddress.setLastName(address.getLastName());
        currentAddress.setAddress1(address.getAddress1());
        currentAddress.setAddress2(address.getAddress2());
        currentAddress.setCity(address.getCity());
        currentAddress.setCounty(address.getCounty());
        currentAddress.setCountry(address.getCountry());
        currentAddress.setEirCode(address.getEirCode());
        return addressRepo.save(currentAddress);
    }

    @Override
    public List<Address> getAllAddresses(Long id) {
        return addressRepo.findAllByUserId(id);
    }
}
