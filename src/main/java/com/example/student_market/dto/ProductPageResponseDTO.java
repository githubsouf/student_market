package com.example.student_market.dto;

import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlRootElement;
import lombok.*;
import java.util.List;

@XmlRootElement(name = "ProductPageResponseDTO")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Builder
public class ProductPageResponseDTO  {

    List<ProductDTO> product;
    private int totalPages;
    private long totalElements;

    @XmlElement(name = "products")
    public List<ProductDTO> getProducts() {
        return product;
    }

    @XmlElement
    public int getTotalPages() {
        return totalPages;
    }

    @XmlElement
    public long getTotalElements() {
        return totalElements;
    }
}
