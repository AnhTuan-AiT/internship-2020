package com.hust.baseweb.applications.product.service;

import com.hust.baseweb.applications.product.entity.Category;
import com.hust.baseweb.applications.product.repo.CategoryRepo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class CategoryServiceImpl implements CategoryService{
    private CategoryRepo categoryRepo;

    @Override
    public Category createCategory(Category category) {
        return categoryRepo.save(category);
    }

    @Override
    public Optional<Category> getCategory(Integer id) {
        return categoryRepo.findById(id);
    }

    @Override
    public List<Category> filterCategoriesByName(String categoryName, Integer pageNumber) {
        return categoryRepo.findAllByCategoryNameContaining(categoryName, PageRequest.of(pageNumber, 10));
    }
}
