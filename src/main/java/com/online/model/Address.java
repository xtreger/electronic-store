package com.online.model;

import com.sun.istack.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "addresses")
@Data
@NoArgsConstructor
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    private String firstName;
    @NotNull
    private String lastName;
    @NotNull
    private String address1;
    private String address2;
    @NotNull
    private String city;
    @NotNull
    private String county;
    private String eirCode;
    private String country;
    private Long userId;

}
