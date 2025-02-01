package com.example.student_market.domain;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "facture")
public class Facture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "facture_id")
    private Long id;

    private LocalDateTime dateFacture;
    private float total;

    @Column(columnDefinition = "TEXT")
    private String productPrice;

    @OneToOne
    @JoinColumn(name = "commande_id")
    private Commande commande;

}
