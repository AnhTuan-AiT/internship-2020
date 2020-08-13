package com.hust.baseweb.applications.product.entity;

import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import net.minidev.json.annotate.JsonIgnore;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

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
