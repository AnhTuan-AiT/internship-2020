package com.hust.baseweb.applications.product.model;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class CreateProductIM {
    @NotBlank(message = "Require product name not empty")
    private String productName;

    private String link;

    private Integer price;

    private Integer quantity;

    private Integer soldQuantity;

    private String description;

    private Integer categoryId;
}
