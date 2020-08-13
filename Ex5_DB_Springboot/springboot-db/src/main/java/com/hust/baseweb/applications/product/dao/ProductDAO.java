package com.hust.baseweb.applications.product.dao;


import com.hust.baseweb.applications.product.entity.Product;

import javax.sql.DataSource;
import java.util.List;

public interface ProductDAO {
    /**
     * This is the method to be used to create
     * a record in the Product table.
     */
    public void create(String name,
                       String link,
                       Integer price,
                       Integer quantity,
                       Integer soldQuantity,
                       String description,
                       Integer categoryId);

    /**
     * This is the method to be used to list down
     * a record from the Product table corresponding
     * to a passed product id.
     */
    public Product getProduct(Integer id);

    /**
     * This is the method to be used to list down
     * all the records from the Product table.
     */
    public List<Product> listProducts();

    /**
     * This is the method to be used to delete
     * a record from the Product table corresponding
     * to a passed product id.
     */
    public void delete(Integer id);
}
