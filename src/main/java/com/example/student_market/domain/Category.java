package com.example.student_market.domain;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "categorie_id")
    private Long id;

    private String title;
    private String description;

//    @OneToMany(mappedBy = "category")
//    private List<Product> products = new ArrayList<>();

}
