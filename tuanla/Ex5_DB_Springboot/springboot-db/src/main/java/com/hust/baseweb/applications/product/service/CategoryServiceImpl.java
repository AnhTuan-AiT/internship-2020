package com.hust.baseweb.applications.product.service;

import com.hust.baseweb.applications.product.entity.Category;
import com.hust.baseweb.applications.product.repo.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryServiceImpl implements CategoryService{
    @Autowired
    CategoryRepo categoryRepo;

    @Override
    public void save(Category category) {
        if (category.getCategoryName() == null ||
                category.getCategoryName().replaceAll("\\s+", "").length() == 0) {
            System.out.println("Require name");
            return;
        }

        categoryRepo.save(category);
    }
}
