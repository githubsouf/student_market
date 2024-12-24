package com.example.student_market.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Getter
@Setter

@Table(name = "admin")
@PrimaryKeyJoinColumn(name = "admin_id")
public class Admin extends User {

}
