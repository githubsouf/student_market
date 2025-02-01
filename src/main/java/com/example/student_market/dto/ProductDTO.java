package com.example.student_market.dto;

import jakarta.xml.bind.annotation.XmlRootElement;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor @NoArgsConstructor
@Data
@Builder
public class ProductDTO {
    private Long produitId;
    private String categories;
    private String productImg;
    private String productName;
    private Double productPrice;
    private String baseColor;
    private String description;
    private String gender;
    private String subCategory;
    private Long vendeurId;
}

