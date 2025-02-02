package com.example.student_market.dto;

import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlRootElement;
import jakarta.xml.bind.annotation.XmlType;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Setter
@AllArgsConstructor
@NoArgsConstructor
@XmlRootElement(name = "orderData") // Annotation pour définir l'élément racine
@XmlType(propOrder = {"user", "paymentType", "cardNumber", "expiryDate", "address", "totalPrice", "cartItems"}) // Ordre des éléments dans le XML
public class OrderDataDTO {
    private String user;
    private String paymentType;
    private String cardNumber;
    private String expiryDate;
    private String address;
    private Double totalPrice;
    private List<CartItemDTO> cartItems;


    @XmlElement(name = "user") // Mappage de "user" en XML
    public String getUser() {
        return user;
    }

    @XmlElement(name = "paymentType")
    public String getPaymentType() {
        return paymentType;
    }

    @XmlElement(name = "cardNumber")
    public String getCardNumber() {
        return cardNumber;
    }

    @XmlElement(name = "expiryDate")
    public String getExpiryDate() {
        return expiryDate;
    }

    @XmlElement(name = "address")
    public String getAddress() {
        return address;
    }
    @XmlElement(name = "totalPrice")
    public Double getTotalPrice() {
        return totalPrice;
    }
    @XmlElement(name = "cartItem") // Chaque article du panier
    public List<CartItemDTO> getCartItems() {
        return cartItems;
    }


}
