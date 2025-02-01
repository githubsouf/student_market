package com.example.student_market.domain;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "mode_paiement")
public class ModePaiement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "mode_paiement_id")
    private Long id;

    private String paiementDesc; // e.g. "Credit Card", "PayPal"


    @OneToMany(mappedBy = "modePaiement")
    private List<Commande> commande = new ArrayList<>();

}
