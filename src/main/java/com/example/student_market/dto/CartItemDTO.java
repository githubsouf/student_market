package com.example.student_market.dto;

import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@AllArgsConstructor
@NoArgsConstructor
@XmlType(propOrder = {"product", "quantity"}) // Ordre des éléments dans le XML
public class CartItemDTO {
    private ProductDTO product;
    private int quantity;

    @XmlElement(name = "product") // Mappage du produit
    public ProductDTO getProduct() {
        return product;
    }

    @XmlElement(name = "quantity")
    public int getQuantity() {
        return quantity;
    }
}
