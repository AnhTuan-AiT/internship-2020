package com.hust.baseweb.applications.product.service;

import com.hust.baseweb.applications.product.entity.Category;
import org.springframework.stereotype.Service;

@Service
public interface CategoryService {
    void save(Category category);
}
