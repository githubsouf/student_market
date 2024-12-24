package com.example.student_market.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "client")
@PrimaryKeyJoinColumn(name = "client_id")
public class Client extends User {

    private boolean banned;
    private float coupon;

}
