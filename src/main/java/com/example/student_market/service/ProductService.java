package com.example.student_market.service;


import com.example.student_market.domain.Product;
import com.example.student_market.dto.ProductDTO;
import com.example.student_market.dto.ProductPageResponseDTO;
import com.example.student_market.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public ProductPageResponseDTO getAllProducts(String category, int page, int size) {
        Page<Product> products;
        if (category == null || category.isEmpty()) {
            products = productRepository.findAll(PageRequest.of(page, size));
        }else
            products = productRepository.findByCategories(category, PageRequest.of(page, size));
        List<ProductDTO> productDTOS = new ArrayList<>();
        for (Product product : products.getContent()) {
            productDTOS.add(convertProductToProductDTO(product));
        }
        return new ProductPageResponseDTO(
                productDTOS,
                products.getTotalPages(),
                products.getTotalElements()
        );
    }


    public Optional<ProductDTO> getProductById(Long id) {
        return Optional.of(convertProductToProductDTO(productRepository.findById(id).get()));
    }

    public ProductDTO saveProduct(Product product) {
        return convertProductToProductDTO(productRepository.save(product));
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
    public Page<ProductDTO> getAllProductsWithPagination(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Product> products = productRepository.findAll(pageable);
        List<ProductDTO> productDTOList = products.getContent()
                .stream()
                .map(this::convertProductToProductDTO)
                .collect(Collectors.toList());
        return new PageImpl<>(productDTOList, pageable, products.getTotalElements());
    }

    private ProductDTO convertProductToProductDTO(Product product) {
        return ProductDTO.builder()
                .vendeurId(product.getVendeurId())
                .productName(product.getProductName())
                .baseColor(product.getBaseColor())
                .description(product.getDescription())
                .produitId(product.getProduitid())
                .subCategory(product.getSubCategory())
                .gender(product.getGender())
                .productPrice(product.getProductPrice())
                .categories(product.getCategories())
                .productImg(product.getProductImg())
                .build();
    }
}
