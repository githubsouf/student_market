package com.example.student_market.dto;

import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlType;
import lombok.*;

@AllArgsConstructor @NoArgsConstructor
@Setter
@Builder
@XmlType(propOrder = {"produitId", "categories", "productImg", "productName", "productPrice", "baseColor", "description", "gender", "subCategory", "vendeurId"})
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

    @XmlElement(name = "produitId") // Mappage de l'ID du produit
    public Long getProduitId() {
        return produitId;
    }

    @XmlElement(name = "categories")
    public String getCategories() {
        return categories;
    }

    @XmlElement(name = "productImg")
    public String getProductImg() {
        return productImg;
    }

    @XmlElement(name = "productName")
    public String getProductName() {
        return productName;
    }

    @XmlElement(name = "productPrice")
    public Double getProductPrice() {
        return productPrice;
    }

    @XmlElement(name = "baseColor")
    public String getBaseColor() {
        return baseColor;
    }

    @XmlElement(name = "description")
    public String getDescription() {
        return description;
    }

    @XmlElement(name = "gender")
    public String getGender() {
        return gender;
    }

    @XmlElement(name = "subCategory")
    public String getSubCategory() {
        return subCategory;
    }

    @XmlElement(name = "vendeurId")
    public Long getVendeurId() {
        return vendeurId;
    }
}