package com.example.student_market.domain;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "commentaires")
public class Commentaire {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "commentaire_id")
    private Long id;

    private String contenu;
    private LocalDateTime dateCommente;
    private int stars;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;


}
