package com.hust.baseweb.applications.product.service;

import com.hust.baseweb.applications.product.entity.Category;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface CategoryService {
    Category createCategory(Category category);

    Optional<Category> getCategory(Integer id);

    List<Category> filterCategoriesByName(String categoryName, Integer pageNumber);

    Page<Category> getCategories(Integer pageNumber);

}
