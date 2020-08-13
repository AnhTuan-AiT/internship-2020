package com.hust.baseweb;

import com.hust.baseweb.applications.product.dao.CategoryDAOImpl;
import com.hust.baseweb.applications.product.dao.ProductDAOImpl;
import com.hust.baseweb.applications.product.entity.Category;
import com.hust.baseweb.applications.product.entity.Product;
import com.hust.baseweb.applications.product.repo.CategoryRepo;
import com.hust.baseweb.applications.product.repo.ProductRepo;
import com.hust.baseweb.applications.product.service.CategoryService;
import com.hust.baseweb.applications.product.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {
    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    ProductService productService;

    @Autowired
    ProductRepo productRepo;

    @Autowired
    CategoryRepo categoryRepo;

    @Autowired
    CategoryService categoryService;

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Override
    public void run(String... args) {
        // JDBC.
        // Product.
        ProductDAOImpl productDAO = new ProductDAOImpl(jdbcTemplate);

        productDAO.create("Điện thoại Bphone",
                "https://www.bkav.com.vn/",
                10000000,
                1000,
                500,
                "Designed by BKAV, made in Viet Nam",
                10);

        for (Product product : productDAO.listProducts()) {
            System.out.println("\n\nProduct " + product.getProductId() + ": \n" +
                    "       name: " + product.getProductName() + "\n" +
                    "       link: " + product.getLink() + "\n" +
                    "       price = " + product.getPrice() + "\n" +
                    "       quantity = " + product.getQuantity() + "\n" +
                    "       sold quantity = " + product.getSoldQuantity() + "\n" +
                    "       description: " + product.getDescription());
        }

        Product product = productDAO.getProduct(10);
        if (product.getProductId() != null) {
            System.out.println("\n\nProduct " + product.getProductId() + ": \n" +
                    "       name: " + product.getProductName() + "\n" +
                    "       link: " + product.getLink() + "\n" +
                    "       price = " + product.getPrice() + "\n" +
                    "       quantity = " + product.getQuantity() + "\n" +
                    "       sold quantity = " + product.getSoldQuantity() + "\n" +
                    "       description: " + product.getDescription());
        }

        productDAO.delete(10);

        // Category.
        CategoryDAOImpl categoryDAO = new CategoryDAOImpl(jdbcTemplate);
        for (Category category : categoryDAO.listCategories()) {
            System.out.println("\n\nCategory " + category.getCategoryId() + ": \n" +
                    "        name: " + category.getCategoryName() + "\n" +
                    "        created stamp: " + category.getCreatedStamp() + "\n" +
                    "        last updated stamp: " + category.getLastUpdatedStamp() + "\n" +
                    "        description: " + category.getDescription());
        }

        // JPA.
        // Product.
        for (Product product1 : productRepo.findAll()) {
            System.out.println("\n\nProduct " + product1.getProductId() + ": \n" +
                    "       name: " + product1.getProductName() + "\n" +
                    "       link: " + product1.getLink() + "\n" +
                    "       price = " + product1.getPrice() + "\n" +
                    "       quantity = " + product1.getQuantity() + "\n" +
                    "       sold quantity = " + product1.getSoldQuantity() + "\n" +
                    "       description: " + product1.getDescription());
        }

        Product product2 = new Product();
        product2.setProductName("Máy tính Thinkpad");
        product2.setCategoryId(10);
        productService.save(product2);

        // Category.
        for (Category category : categoryRepo.findAll()) {
            System.out.println("\n\nCategory " + category.getCategoryId() + ": \n" +
                    "        name: " + category.getCategoryName() + "\n" +
                    "        created stamp: " + category.getCreatedStamp() + "\n" +
                    "        last updated stamp: " + category.getLastUpdatedStamp() + "\n" +
                    "        description: " + category.getDescription());
        }
    }
}
