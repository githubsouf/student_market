package com.example.student_market.repository;
import com.example.student_market.domain.Product;
import com.example.student_market.dto.ProductDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    Page<Product> findAll(Pageable pageable);
    Page<Product> findByCategories(String category, Pageable pageable);
    List<Product> findByProductNameContainingOrCategoriesContainingOrSubCategoryContaining(String productName, String categoryName, String subCategoryName);
}

