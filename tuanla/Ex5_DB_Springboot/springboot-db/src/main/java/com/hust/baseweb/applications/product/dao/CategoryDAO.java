package com.hust.baseweb.applications.product.dao;

import com.hust.baseweb.applications.product.entity.Category;

import java.util.List;

public interface CategoryDAO {
    /**
     * This is the method to be used to create
     * a record in the Category table.
     */
    public void create(String name, String description);

    /**
     * This is the method to be used to list down
     * a record from the Category table corresponding
     * to a passed category id.
     */
    public Category getCategory(Integer id);

    /**
     * This is the method to be used to list down
     * all the records from the Category table.
     */
    public List<Category> listCategories();

    /**
     * This is the method to be used to delete
     * a record from the Category table corresponding
     * to a passed category id.
     */
    public void delete(Integer id);
}
