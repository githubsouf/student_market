package com.example.student_market.service;

import com.example.student_market.domain.Panier;
import com.example.student_market.domain.Product;
import com.example.student_market.domain.User;
import com.example.student_market.domain.UserProductKey;
import com.example.student_market.repository.PanierRepository;
import com.example.student_market.repository.ProductRepository;
import com.example.student_market.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;

@Service
public class PanierService {

    @Autowired
    private PanierRepository panierRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    // 🔹 Ajouter un produit au panier
    public Panier addToPanier(Long userId, Long productId, int quantity) {
        User user = userRepository.findById(userId).orElse(null);
        Product product = productRepository.findById(productId).orElseThrow(() -> new RuntimeException("Produit non trouvé"));
        UserProductKey panierKey = new UserProductKey(userId, productId);
        Panier panier = new Panier(panierKey, user, product, quantity);
        return panierRepository.save(panier);
    }

    public List<Panier> getPanierByUser(Long userId) {
        return panierRepository.findAll()
                .stream()
                .filter(p -> p.getUser() != null && p.getUser().getId().equals(userId))
                .toList();
    }


    public Panier updateQuantity(Long userId, Long productId, int newQuantity) {
        UserProductKey panierKey = new UserProductKey(userId, productId);
        Panier panier = panierRepository.findById(panierKey)
                .orElseThrow(() -> new RuntimeException("Produit non trouvé dans le panier"));
        panier.setQuantity(newQuantity);
        return panierRepository.save(panier);
    }

    // 🔹 Supprimer un produit du panier
    public void removeFromPanier(Long userId, Long productId) {
        UserProductKey panierKey = new UserProductKey(userId, productId);
        panierRepository.deleteById(panierKey);
    }

    // 🔹 Supprimer tous les produits du panier d'un utilisateur
    public void clearPanier(Long userId) {
        panierRepository.findAll()
                .stream()
                .filter(p -> p.getUser() != null && p.getUser().getId().equals(userId))
                .forEach(p -> panierRepository.deleteById(p.getId()));
    }
}

