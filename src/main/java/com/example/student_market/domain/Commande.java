package com.example.student_market.domain;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "commande")
public class Commande {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "commande_id")
    private Long id;

    private LocalDateTime dateCommande;
    private String state;


    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;

    @ManyToOne
    @JoinColumn(name = "mode_paiement_id")
    private ModePaiement modePaiement;

    @OneToOne(mappedBy = "commande", cascade = CascadeType.ALL)
    private Facture facture;

    @OneToOne
    @JoinColumn(name = "livraison_id")
    private Livraisons livraisons;

    @OneToMany(mappedBy = "commande")
    private Set<CommandeLine> commandeLines;


}
