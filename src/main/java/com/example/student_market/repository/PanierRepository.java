package com.example.student_market.repository;

import com.example.student_market.domain.Panier;
import com.example.student_market.domain.UserProductKey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PanierRepository extends JpaRepository<Panier, UserProductKey> {
}

