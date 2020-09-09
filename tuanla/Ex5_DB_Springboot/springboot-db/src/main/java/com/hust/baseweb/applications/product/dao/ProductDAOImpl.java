package com.hust.baseweb.applications.product.dao;

import com.hust.baseweb.applications.product.entity.Product;
import com.hust.baseweb.applications.product.mapper.ProductMapper;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class ProductDAOImpl implements ProductDAO{
    private JdbcTemplate jdbcTemplate;

    public ProductDAOImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public void create(String name,
                       String link,
                       Integer price,
                       Integer quantity,
                       Integer soldQuantity,
                       String description,
                       Integer categoryId) {
        try {
            if (name == null || name.replaceAll("\\s+","").length() == 0) {
                System.out.println("Require name");
                return;
            }

            String SQL = "insert into product (product_name, link, price, quantity, sold_quantity, description, category_id) values (?, ?, ?, ?, ?, ?, ?)";
            jdbcTemplate.update(SQL, name, link, price, quantity, soldQuantity, description, categoryId);
            System.out.println("Created product:\n" +
                    "       name: " + name + "\n" +
                    "       link: " + link + "\n" +
                    "       price = " + price + "\n" +
                    "       quantity = " + quantity + "\n" +
                    "       sold quantity = " + soldQuantity + "\n" +
                    "       description: " + description + "\n" +
                    "       categoryId = " + categoryId);
        } catch (DataIntegrityViolationException e) {
            System.out.println("No category has ID = " + categoryId);
        }
    }

    @Override
    public Product getProduct(Integer id) {
        try {
            String SQL = "select * from product where product_id = ?";
            Product product = jdbcTemplate.queryForObject(SQL,
                    new Object[]{id}, new ProductMapper());

            return product;
        } catch (EmptyResultDataAccessException e) {
            return new Product();
        }
    }

    @Override
    public List<Product> listProducts() {
        String SQL = "select * from product";
        List<Product> products = jdbcTemplate.query(SQL, new ProductMapper());
        return products;
    }

    @Override
    public void delete(Integer id) {
        String SQL = "delete from product where product_id = ?";
        jdbcTemplate.update(SQL, id);
        System.out.println("Deleted product with ID = " + id);
    }
}
