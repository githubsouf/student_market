package com.example.student_market.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "businessman")
@PrimaryKeyJoinColumn(name = "business_id")
public class Businessman extends User {

    private String descriptionBusiness;

    // Constructors, getters, setters
}
