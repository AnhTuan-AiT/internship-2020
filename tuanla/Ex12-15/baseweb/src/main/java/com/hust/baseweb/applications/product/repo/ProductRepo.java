package com.hust.baseweb.applications.product.repo;

import com.hust.baseweb.applications.product.entity.Product;
import com.hust.baseweb.applications.product.model.GetProductsOfCategoryOM;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ProductRepo extends JpaRepository<Product, Integer> {
    List<Product> findAllByProductNameContaining(String productName, Pageable pageable);

    @Modifying
    @Transactional
    @Query(value = "update product set " +
            "product_name = ?2, " +
            "link = ?3, " +
            "price = ?4, " +
            "quantity = ?5, " +
            "sold_quantity = ?6, " +
            "description = ?7, " +
            "category_id = ?8 " +
            "where product_id = ?1", nativeQuery = true)
    int updateProduct(Integer id,
                      String productName,
                      String link,
                      Integer price,
                      Integer quantity,
                      Integer soldQuantity,
                      String description,
                      Integer categoryId);

    @Query(value = "select product_id productId, product_name productName, link, price from product p where category_id = ?1", countQuery = "SELECT count(*) FROM product p where category_id = ?1", nativeQuery = true)
    Page<GetProductsOfCategoryOM> findAllByCategoryId(Integer categoryId, Pageable pageable);
}
