package com.hust.baseweb.applications.product.mapper;

import com.hust.baseweb.applications.product.entity.Category;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class CategoryMapper implements RowMapper<Category> {
    public Category mapRow(ResultSet rs, int rowNum) throws SQLException {
        Category category = new Category();

        category.setCategoryId(rs.getInt("category_id"));
        category.setCategoryName(rs.getString("category_name"));
        category.setCreatedStamp(rs.getDate("created_stamp"));
        category.setLastUpdatedStamp(rs.getDate("last_updated_stamp"));
        category.setDescription(rs.getString("description"));

        return category;
    }
}
