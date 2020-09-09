package com.hust.baseweb.applications.product.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Integer productId;

    @Column(name = "product_name")
    private String productName;

    private String link;

    private Integer price;

    private Integer quantity;

    @Column(name = "sold_quantity")
    private Integer soldQuantity;

    private String description;

    @Column(name = "category_id")
    private Integer categoryId;
}
