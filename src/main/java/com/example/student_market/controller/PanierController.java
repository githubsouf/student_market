package com.example.student_market.controller;

import com.example.student_market.domain.Panier;
import com.example.student_market.service.PanierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/panier")
public class PanierController {

    @Autowired
    private PanierService panierService;

    @PostMapping("/add")
    public Panier addToPanier(@RequestBody Map<String, Object> request) {
        Long userId = ((Number) request.get("userId")).longValue();
        Long productId = ((Number) request.get("productId")).longValue();
        int quantity = (int) request.get("quantity");
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