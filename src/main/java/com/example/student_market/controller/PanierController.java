package com.example.student_market.controller;

import com.example.student_market.domain.Panier;
import com.example.student_market.service.PanierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/panier")
public class PanierController {

    @Autowired
    private PanierService panierService;

    @PostMapping("/add")
    public Panier addToPanier(@RequestParam Long userId, @RequestParam Long productId, @RequestParam int quantity) {
        return panierService.addToPanier(userId, productId, quantity);
    }

    @GetMapping("/{userId}")
    public List<Panier> getPanier(@PathVariable Long userId) {
        return panierService.getPanierByUser(userId);
    }

    @PutMapping("/update")
    public Panier updateQuantity(@RequestParam Long userId, @RequestParam Long productId, @RequestParam int newQuantity) {
        return panierService.updateQuantity(userId, productId, newQuantity);
    }

    @DeleteMapping("/remove")
    public void removeFromPanier(@RequestParam Long userId, @RequestParam Long productId) {
        panierService.removeFromPanier(userId, productId);
    }

    @DeleteMapping("/clear/{userId}")
    public void clearPanier(@PathVariable Long userId) {
        panierService.clearPanier(userId);
    }
}

