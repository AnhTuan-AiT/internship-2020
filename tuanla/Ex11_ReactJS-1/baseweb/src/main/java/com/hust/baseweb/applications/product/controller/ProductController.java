package com.hust.baseweb.applications.product.controller;

import com.hust.baseweb.applications.product.entity.Category;
import com.hust.baseweb.applications.product.entity.Product;
import com.hust.baseweb.applications.product.model.CreateProductIM;
import com.hust.baseweb.applications.product.repo.CategoryRepo;
import com.hust.baseweb.applications.product.repo.ProductRepo;
import com.hust.baseweb.applications.product.service.CategoryService;
import com.hust.baseweb.applications.product.service.ProductService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Validation;
import javax.validation.Validator;
import java.sql.SQLIntegrityConstraintViolationException;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Controller
@CrossOrigin
@Log4j2
@AllArgsConstructor(onConstructor = @__(@Autowired))
@RequestMapping("/admin")
public class ProductController {
    private ProductService productService;
    private CategoryRepo categoryRepo;
    private CategoryService categoryService;
    private ProductRepo productRepo;
    private Validator validator = Validation.buildDefaultValidatorFactory().getValidator();

    public String validateObjects(List<?> objects) {
        var errorMessage = objects.stream()
                .map(object -> validator.validate(object))
                .filter(violations -> violations.size() > 0)
                .flatMap(Collection::stream)
                .map(violation -> violation.getMessage() + "\n")
                .collect(Collectors.joining());

        return errorMessage;
    }

    @PostMapping("/products")
    public ResponseEntity<?> createProduct(@RequestBody CreateProductIM product) {
        try {
            String errorMessage = validateObjects(List.of(product));

            if (errorMessage.length() == 0) {
                Product product1 = new Product();

                if (null != product.getCategoryId()) {
                    Category category = new Category();
                    category.setCategoryId(product.getCategoryId());
                    product1.setCategory(category);
                }

                product1.setProductName(product.getProductName());
                product1.setLink(product.getLink());
                product1.setPrice(product.getPrice());
                product1.setQuantity(product.getQuantity());
                product1.setSoldQuantity(product.getSoldQuantity());
                product1.setDescription(product.getDescription());

                return ResponseEntity.ok().body(productService.createProduct(product1));
            } else {
                return new ResponseEntity(errorMessage, HttpStatus.BAD_REQUEST);
            }
        } catch (DataIntegrityViolationException e) {
            return new ResponseEntity("No category has ID = " + product.getCategoryId(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/products/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable Integer id, @RequestBody CreateProductIM product) {

        String errorMessage = validateObjects(List.of(product));

        if (errorMessage.length() == 0) {
            int count = productService.updateProduct(id, product);
            if (1 == count) {
                return ResponseEntity.ok().body("Updated");
            } else {
                return new ResponseEntity("No product has ID = " + id, HttpStatus.BAD_REQUEST);
            }

        } else {
            return new ResponseEntity(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<?> getProduct(@PathVariable Integer id) {
        Optional<Product> product = productService.getProduct(id);

        if (product.isEmpty()) return new ResponseEntity("No product has ID = " + id, HttpStatus.NOT_FOUND);

        Product product1 = product.get();

        if (product1.getCategory() != null) {
            Category category = new Category();
            category.setCategoryId(product1.getCategory() == null ? null : product1.getCategory().getCategoryId());
            product1.setCategory(category);
        }

        return ResponseEntity.ok().body(product1);
    }

    @GetMapping("/products")
    public ResponseEntity<?> filterProductsByName(@RequestParam String productName, @RequestParam Integer pageNumber) {
        if (pageNumber < 0) {
            return new ResponseEntity("Page number must be greater than or equal zero", HttpStatus.BAD_REQUEST);
        }

        return ResponseEntity.ok().body(productService.filterProductsByName(StringUtils.trimToEmpty(productName), pageNumber));
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Integer id) {
        try {
            productRepo.deleteById(id);
            return ResponseEntity.ok().body("Deleted");
        } catch (EmptyResultDataAccessException e) {
            return new ResponseEntity("No product has ID = " + id, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/categories")
    public ResponseEntity<?> createCategory(@RequestBody Category category) {
        String errorMessage = validateObjects(List.of(category));

        if (errorMessage.length() == 0) {
            category.setCreatedStamp(null);
            category.setLastUpdatedStamp(null);

            return ResponseEntity.ok().body(categoryService.createCategory(category));
        } else {
            return new ResponseEntity(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/categories/{id}")
    public ResponseEntity<?> updateCategory(@PathVariable Integer id, @RequestBody Category category) {

        String errorMessage = validateObjects(List.of(category));

        if (errorMessage.length() == 0) {

            Optional<Category> category1 = categoryRepo.findById(id);
            if (category1.isPresent()) {
                Category category2 = category1.get();
                category2.setCategoryName(category.getCategoryName());
                category2.setLastUpdatedStamp(new Date());
                category2.setDescription(category.getDescription());

                categoryRepo.save(category2);

                return ResponseEntity.ok().body("Updated");
            } else {
                return new ResponseEntity("No category has ID = " + id, HttpStatus.BAD_REQUEST);
            }

        } else {
            return new ResponseEntity(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/categories/{id}")
    public ResponseEntity<?> getCategory(@PathVariable Integer id) {
        Optional<Category> category = categoryService.getCategory(id);

        if (category.isEmpty()) return new ResponseEntity("No category has ID = " + id, HttpStatus.NOT_FOUND);

        Category category1 = category.get();
        category1.setProducts(null);

        return ResponseEntity.ok().body(category1);
    }

    @GetMapping("/categories")
    public ResponseEntity<?> filterCategoriesByName(@RequestParam String categoryName, @RequestParam Integer pageNumber) {
        if (pageNumber < 0) {
            return new ResponseEntity("Page number must be greater than or equal zero", HttpStatus.BAD_REQUEST);
        }

        return ResponseEntity.ok().body(categoryService.filterCategoriesByName(StringUtils.trimToEmpty(categoryName), pageNumber));
    }

    @DeleteMapping("/categories/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Integer id) {
        try {
            categoryRepo.deleteById(id);
            return ResponseEntity.ok().body("Deleted");
        } catch (EmptyResultDataAccessException e) {
            return new ResponseEntity("No category has ID = " + id, HttpStatus.NOT_FOUND);
        }
    }
}
