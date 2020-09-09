package com.hust.baseweb.applications.product.mapper;

import com.hust.baseweb.applications.product.entity.Product;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ProductMapper implements RowMapper<Product> {
    public Product mapRow(ResultSet rs, int rowNum) throws SQLException {
        Product product = new Product();

        product.setProductId(rs.getInt("product_id"));
        product.setProductName(rs.getString("product_name"));
        product.setLink(rs.getString("link"));
        product.setPrice(rs.getInt("price"));
        product.setQuantity(rs.getInt("quantity"));
        product.setSoldQuantity(rs.getInt("sold_quantity"));
        product.setDescription(rs.getString("description"));

        return product;
    }
}
