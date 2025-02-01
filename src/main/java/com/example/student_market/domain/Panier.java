package com.example.student_market.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "panier")
public class Panier {
    @EmbeddedId
    private UserProductKey id = new UserProductKey();
    @ManyToOne
    @MapsId("user_id")
    @JoinColumn(name = "user_id", nullable = true) // Peut être NULL
    private User user;
    @ManyToOne
    @MapsId("produitid")
    @JoinColumn(name = "product_id")
    private Product product;

    private int quantity;
}
