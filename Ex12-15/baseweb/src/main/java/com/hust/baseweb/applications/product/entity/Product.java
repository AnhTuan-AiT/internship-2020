package com.hust.baseweb.applications.product.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Integer productId;

    @NotBlank(message = "Require product name not empty")
    @Column(name = "product_name")
    private String productName;

    private String link;

    private Integer price;

    private Integer quantity;

    @Column(name = "sold_quantity")
    private Integer soldQuantity;

    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;
}
