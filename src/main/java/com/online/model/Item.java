package com.online.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "items")
@Data
@NoArgsConstructor
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String title;
    private String manufacturer;
    private Double price;
    private String category;
    private String description;
    private Integer warranty;
    private String image;
    private Integer amountInStock;
    private Double rating;
    private Integer ratingsAmount;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "itemId")
    private List<Comment> comments;

}
