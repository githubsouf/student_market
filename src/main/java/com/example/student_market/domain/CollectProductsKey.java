//package com.example.student_market.domain;
//
//import jakarta.persistence.Column;
//import jakarta.persistence.Embeddable;
//import java.io.Serializable;
//import java.util.Objects;
//
//@Embeddable
//public class CollectProductsKey implements Serializable {
//
//    @Column(name = "panier_id")
//    private Long panierId;
//
//    @Column(name = "product_id")
//    private Long productId;
//
//
//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (!(o instanceof CollectProductsKey)) return false;
//        CollectProductsKey that = (CollectProductsKey) o;
//        return Objects.equals(panierId, that.panierId) &&
//                Objects.equals(productId, that.productId);
//    }
//
//    @Override
//    public int hashCode() {
//        return Objects.hash(panierId, productId);
//    }
//}
