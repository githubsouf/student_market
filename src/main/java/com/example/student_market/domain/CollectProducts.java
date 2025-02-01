//package com.example.student_market.domain;
//
//import jakarta.persistence.*;
//
//@Entity
//@Table(name = "collect_products")
//public class CollectProducts {
//
//    @EmbeddedId
//    private CollectProductsKey id = new CollectProductsKey();
//
//    private int quantity;
//
//    @ManyToOne
//    @MapsId("panierId")
//    @JoinColumn(name = "panier_id")
//    private Panier panier;
//
////    @ManyToOne
////    @MapsId("productId")
////    @JoinColumn(name = "product_id")
////    private Product product;
//
//}
