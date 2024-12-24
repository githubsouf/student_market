package com.example.student_market.domain;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long id;

    private String titre;
    private String description;
    private float prix;
    private LocalDateTime addDate;
    private int stock;
    private String state;

    // images stored as JSON =>
    // In JPA, you might store them as a String or a JSON type
    // depending on your DB. Or create a separate table for them.
    @Column(columnDefinition = "TEXT")
    private String images;

    @ManyToOne
    @JoinColumn(name = "categorie_id")
    private Category category;

    // Relationship with Commentaire:
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<Commentaire> commentaires = new ArrayList<>();


}
