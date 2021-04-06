package com.online.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "payments")
@Data
@NoArgsConstructor
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String cardNo;
    private String cardNoDisplay;
    private String expireDate;
    private String cvv;
    private Boolean defaultPaymentMethod;

    private Long userId;
}
