package com.hust.baseweb.applications.product.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity
public class Category {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "category_id")
    private Integer categoryId;

    @Column(name = "category_name")
    private String categoryName;

    @Column(name = "created_stamp")
    private Date createdStamp;

    @Column(name = "last_updated_stamp")
    private Date lastUpdatedStamp;

    private String description;
}
