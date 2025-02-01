package com.example.student_market.domain;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CommandeProductKey implements Serializable {

    private Long commande_id;
    private Long produitid;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CommandeProductKey commandeProductKeyKey = (CommandeProductKey) o;
        return Objects.equals(commande_id, commandeProductKeyKey.commande_id) &&
                Objects.equals(produitid, commandeProductKeyKey.produitid);
    }

    @Override
    public int hashCode() {
        return Objects.hash(commande_id, produitid);
    }
}
