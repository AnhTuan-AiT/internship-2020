package com.hust.baseweb.applications.product.service;

import com.hust.baseweb.applications.product.entity.Product;
import com.hust.baseweb.applications.product.repo.ProductRepo;
import org.hibernate.exception.ConstraintViolationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    ProductRepo productRepo;

    @Override
    public void save(Product product) {
        if (product.getProductName() == null ||
                product.getProductName().replaceAll("\\s+", "").length() == 0) {
            System.out.println("Require name");
            return;
        }

        try {
            productRepo.save(product);
        } catch (Exception e) {
            System.out.println("No category has ID = " + product.getCategoryId());
        }
    }
}
