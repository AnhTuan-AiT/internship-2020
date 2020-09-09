package com.hust.baseweb.applications.product.service;

import com.hust.baseweb.applications.product.entity.Product;
import com.hust.baseweb.applications.product.model.CreateProductIM;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ProductService {
    Product createProduct(Product product);

    Optional<Product> getProduct(Integer id);

    List<Product> filterProductsByName(String productName, Integer pageNumber);

    int updateProduct(Integer id, CreateProductIM productIM);
}
