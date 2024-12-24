package com.example.student_market.domain;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "livraisons")
public class Livraisons {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "livraison_id")
    private Long id;

    private LocalDateTime dateLivraison;
    private String modeLivraison;

}
