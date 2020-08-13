package com.hust.baseweb.applications.product.service;

import com.hust.baseweb.applications.product.entity.Product;
import org.springframework.stereotype.Service;

@Service
public interface ProductService {
    void save(Product product);
}
