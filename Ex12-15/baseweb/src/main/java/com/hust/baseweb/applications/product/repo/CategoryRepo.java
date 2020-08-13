package com.hust.baseweb.applications.product.repo;

import com.hust.baseweb.applications.product.entity.Category;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepo extends JpaRepository<Category, Integer> {
    List<Category> findAllByCategoryNameContaining(String categoryName, Pageable pageable);
}
