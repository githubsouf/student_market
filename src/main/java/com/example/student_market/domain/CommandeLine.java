package com.example.student_market.domain;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "commande_line")
public class CommandeLine {
    @EmbeddedId
    private CommandeProductKey id = new CommandeProductKey();
    @ManyToOne
    @MapsId("commande_id")
    @JoinColumn(name = "commande_id", nullable = true) // Peut être NULL
    private Commande commande;
    @ManyToOne
    @MapsId("produitid")
    @JoinColumn(name = "produitid")
    private Product product;
    private int quantity;

}

