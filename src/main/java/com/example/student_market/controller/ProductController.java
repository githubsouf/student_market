package com.example.student_market.controller;

import com.example.student_market.domain.Product;
import com.example.student_market.dto.ProductDTO;
import com.example.student_market.dto.ProductPageResponseDTO;
import com.example.student_market.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/{id}")
    public Optional<ProductDTO> getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @PostMapping
    public ProductDTO createProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }
    @GetMapping(produces = {MediaType.APPLICATION_XML_VALUE})
    public ProductPageResponseDTO getAllProductsWithPagination(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String category) {
        System.out.println("getAllProductsWithPagination");
        System.out.println("category: " + page);
        if (category != null && !category.isEmpty()) {
            return productService.getAllProducts(category,page,size);
        }
            return productService.getAllProducts(null, page, size);
    }

    @GetMapping("/search")
    public List<ProductDTO> searchProducts(@RequestParam String query) {
        return productService.searchProducts(query);
    }

}