package com.example.student_market.domain;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

import lombok.*;
import java.util.Set;

@Entity
@Table(name = "products")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long produitid;

    @Column(nullable = false)
    private String categories;

    @Column(name = "product_img", nullable = false)
    private String productImg;

    @Column(name = "product_name", nullable = false)
    private String productName;

    @Column(name = "product_price", nullable = false)
    private Double productPrice;

    @Column(name = "basecolor")
    private String baseColor;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String gender;

    @Column(name = "subcategory")
    private String subCategory;

    @Column(name = "vendeurid")
    private Long vendeurId;

    // Relationship with Commentaire:
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<Commentaire> commentaires = new ArrayList<>();

    @OneToMany(mappedBy = "product")
    private Set<Panier> paniers;
    @OneToMany(mappedBy = "product")
    private Set<CommandeLine> commandeLines;

}
