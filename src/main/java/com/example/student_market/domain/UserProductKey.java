package com.example.student_market.domain;
import jakarta.persistence.Embeddable;
import lombok.*;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserProductKey implements Serializable {
    private Long user_id;
    private Long produitid;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserProductKey panierKey = (UserProductKey) o;
        return Objects.equals(user_id, panierKey.user_id) &&
                Objects.equals(produitid, panierKey.produitid);
    }

    @Override
    public int hashCode() {
        return Objects.hash(user_id, produitid);
    }
}
