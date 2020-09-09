package com.hust.baseweb.applications.product.service;

import com.hust.baseweb.applications.product.entity.Product;
import com.hust.baseweb.applications.product.model.CreateProductIM;
import com.hust.baseweb.applications.product.model.GetProductsOfCategoryOM;
import com.hust.baseweb.applications.product.repo.ProductRepo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class ProductServiceImpl implements ProductService {
    ProductRepo productRepo;

    @Override
    public Product createProduct(Product product) {
        return productRepo.save(product);
    }

    @Override
    public Optional<Product> getProduct(Integer id) {
        return productRepo.findById(id);
    }

    @Override
    public List<Product> filterProductsByName(String productName, Integer pageNumber) {
        return productRepo.findAllByProductNameContaining(productName, PageRequest.of(pageNumber, 10));
    }

    @Override
    public int updateProduct(Integer id, CreateProductIM productIM) {
        return productRepo.updateProduct(id,
                productIM.getProductName(),
                productIM.getLink(),
                productIM.getPrice(),
                productIM.getQuantity(),
                productIM.getSoldQuantity(),
                productIM.getDescription(),
                productIM.getCategoryId());
    }

    @Override
    public Page<GetProductsOfCategoryOM> getPageProductsOfCategory(Integer categoryId, Integer pageNumber) {
        return productRepo.findAllByCategoryId(categoryId, PageRequest.of(pageNumber, 6));
    }
}
