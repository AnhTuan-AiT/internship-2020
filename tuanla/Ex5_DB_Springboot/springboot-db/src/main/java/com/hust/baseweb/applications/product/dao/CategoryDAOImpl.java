package com.hust.baseweb.applications.product.dao;

import com.hust.baseweb.applications.product.entity.Category;
import com.hust.baseweb.applications.product.mapper.CategoryMapper;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class CategoryDAOImpl implements CategoryDAO {

    private JdbcTemplate jdbcTemplate;

    public CategoryDAOImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public void create(String name, String description) {
        if (name == null || name.replaceAll("\\s+", "").length() == 0) {
            System.out.println("Require name");
            return;
        }

        String SQL = "insert into category (category_name, description) values (?, ?)";
        jdbcTemplate.update(SQL, name, description);
        System.out.println("Created category:\n" +
                "       name: " + name + "\n" +
                "       description: " + description);
    }

    @Override
    public Category getCategory(Integer id) {
        try {
            String SQL = "select * from category where category_id = ?";
            Category category = jdbcTemplate.queryForObject(SQL,
                    new Object[]{id}, new CategoryMapper());

            return category;
        } catch (EmptyResultDataAccessException e) {
            return new Category();
        }

    }

    @Override
    public List<Category> listCategories() {
        String SQL = "select * from category";
        List<Category> categories = jdbcTemplate.query(SQL, new CategoryMapper());
        return categories;
    }

    @Override
    public void delete(Integer id) {
        String SQL = "delete from category where category_id = ?";
        jdbcTemplate.update(SQL, id);
        System.out.println("Deleted category with ID = " + id);
    }
}
