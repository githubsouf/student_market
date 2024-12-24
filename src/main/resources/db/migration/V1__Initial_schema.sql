-- V1__Initial_schema.sql

-------------------------------------------------
--  1) USERS (base table)
-------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
                                     user_id      BIGSERIAL PRIMARY KEY,
                                     username     VARCHAR(50)  NOT NULL UNIQUE,
    password     VARCHAR(255) NOT NULL,
    firstname    VARCHAR(100),
    lastname     VARCHAR(100),
    email        VARCHAR(100),
    phone        VARCHAR(20),
    confirmed_at TIMESTAMP,
    reset_at     TIMESTAMP,
    avatar       VARCHAR(255),
    role         VARCHAR(50)
    );

-------------------------------------------------
--  2) CLIENT (1:1 with USERS)
--     client_id references users(user_id)
-------------------------------------------------
CREATE TABLE IF NOT EXISTS client (
                                      client_id BIGINT PRIMARY KEY,
                                      banned    BOOLEAN,
                                      coupon    FLOAT,

                                      CONSTRAINT fk_client_user
                                      FOREIGN KEY (client_id) REFERENCES users (user_id)
    ON DELETE CASCADE
    );

-------------------------------------------------
--  3) ADMIN (1:1 with USERS)
-------------------------------------------------
CREATE TABLE IF NOT EXISTS admin (
                                     admin_id BIGINT PRIMARY KEY,

                                     CONSTRAINT fk_admin_user
                                     FOREIGN KEY (admin_id) REFERENCES users (user_id)
    ON DELETE CASCADE
    );

-------------------------------------------------
--  4) BUSINESSMAN (1:1 with USERS)
-------------------------------------------------
CREATE TABLE IF NOT EXISTS businessman (
                                           business_id BIGINT PRIMARY KEY,
                                           description_business VARCHAR(255),

    CONSTRAINT fk_businessman_user
    FOREIGN KEY (business_id) REFERENCES users (user_id)
    ON DELETE CASCADE
    );

-------------------------------------------------
--  5) NOTIFICATIONS (Many-to-One with USERS)
-------------------------------------------------
CREATE TABLE IF NOT EXISTS notifications (
                                             notification_id BIGSERIAL PRIMARY KEY,
                                             type       VARCHAR(50),
    checked    BOOLEAN,
    date_notif TIMESTAMP,
    title      VARCHAR(255),
    body       TEXT,

    user_id    BIGINT,
    CONSTRAINT fk_notification_user
    FOREIGN KEY (user_id) REFERENCES users (user_id)
    ON DELETE SET NULL
    );

-------------------------------------------------
--  6) FORUM_MESSAGES (Many-to-One with USERS, plus self-relation)
-------------------------------------------------
CREATE TABLE IF NOT EXISTS forum_messages (
                                              message_id   BIGSERIAL PRIMARY KEY,
                                              me           BOOLEAN,
                                              contenu      TEXT,
                                              deleted      BOOLEAN,
                                              send_date    TIMESTAMP,

                                              user_id      BIGINT,
    -- Self-relation for reply
                                              parent_message_id BIGINT,

                                              CONSTRAINT fk_forum_user
                                              FOREIGN KEY (user_id) REFERENCES users (user_id)
    ON DELETE SET NULL,

    CONSTRAINT fk_forum_parent
    FOREIGN KEY (parent_message_id) REFERENCES forum_messages (message_id)
    ON DELETE CASCADE
    );

-------------------------------------------------
--  7) CATEGORIES (One-to-Many with PRODUCTS)
-------------------------------------------------
CREATE TABLE IF NOT EXISTS categories (
                                          categorie_id BIGSERIAL PRIMARY KEY,
                                          title        VARCHAR(100),
    description  VARCHAR(255)
    );

-------------------------------------------------
--  8) PRODUCTS (Many-to-One with CATEGORIES)
-------------------------------------------------
CREATE TABLE IF NOT EXISTS products (
                                        product_id  BIGSERIAL PRIMARY KEY,
                                        titre       VARCHAR(255),
    description TEXT,
    prix        FLOAT,
    add_date    TIMESTAMP,
    stock       INT,
    state       VARCHAR(50),
    images      TEXT,          -- Storing JSON or image URLs as TEXT

    categorie_id BIGINT,
    CONSTRAINT fk_product_category
    FOREIGN KEY (categorie_id) REFERENCES categories (categorie_id)
    ON DELETE SET NULL
    );

-------------------------------------------------
--  9) COMMENTAIRES (Many-to-One with PRODUCTS)
-------------------------------------------------
CREATE TABLE IF NOT EXISTS commentaires (
                                            commentaire_id BIGSERIAL PRIMARY KEY,
                                            contenu        TEXT,
                                            date_commente  TIMESTAMP,
                                            stars          INT,

                                            product_id     BIGINT,
                                            CONSTRAINT fk_commentaire_product
                                            FOREIGN KEY (product_id) REFERENCES products (product_id)
    ON DELETE CASCADE
    );

-------------------------------------------------
-- 10) PANIER (Shopping cart; Many-to-One with USERS)
-------------------------------------------------
CREATE TABLE IF NOT EXISTS panier (
                                      panier_id BIGSERIAL PRIMARY KEY,

                                      user_id   BIGINT,
                                      CONSTRAINT fk_panier_user
                                      FOREIGN KEY (user_id) REFERENCES users (user_id)
    ON DELETE CASCADE
    );

-------------------------------------------------
-- 11) COLLECT_PRODUCTS (Bridging table Panier <-> Products)
-------------------------------------------------
CREATE TABLE IF NOT EXISTS collect_products (
                                                panier_id  BIGINT NOT NULL,
                                                product_id BIGINT NOT NULL,
                                                quantity   INT    NOT NULL DEFAULT 1,

                                                PRIMARY KEY (panier_id, product_id),

    CONSTRAINT fk_collect_panier
    FOREIGN KEY (panier_id) REFERENCES panier (panier_id)
    ON DELETE CASCADE,

    CONSTRAINT fk_collect_product
    FOREIGN KEY (product_id) REFERENCES products (product_id)
    ON DELETE CASCADE
    );

-------------------------------------------------
-- 12) MODE_PAIEMENT (One-to-Many with commande_line)
-------------------------------------------------
CREATE TABLE IF NOT EXISTS mode_paiement (
                                             mode_paiement_id BIGSERIAL PRIMARY KEY,
                                             paiement_desc    VARCHAR(255)
    );

-------------------------------------------------
-- 13) LIVRAISONS (One-to-One with commande_line)
-------------------------------------------------
CREATE TABLE IF NOT EXISTS livraisons (
                                          livraison_id  BIGSERIAL PRIMARY KEY,
                                          date_livraison TIMESTAMP,
                                          mode_livraison VARCHAR(100)
    );

-------------------------------------------------
-- 14) COMMANDE_LINE (Order)
-------------------------------------------------
CREATE TABLE IF NOT EXISTS commande_line (
                                             commande_id    BIGSERIAL PRIMARY KEY,
                                             date_commande  TIMESTAMP,
                                             state          VARCHAR(50),

    -- references a CLIENT
    client_id      BIGINT,
    CONSTRAINT fk_commande_client
    FOREIGN KEY (client_id) REFERENCES client (client_id)
    ON DELETE SET NULL,

    -- references a MODE_PAIEMENT
    mode_paiement_id BIGINT,
    CONSTRAINT fk_commande_mode
    FOREIGN KEY (mode_paiement_id) REFERENCES mode_paiement (mode_paiement_id)
    ON DELETE SET NULL,

    -- references a LIVRAISONS (0..1)
    livraison_id BIGINT,
    CONSTRAINT fk_commande_livraison
    FOREIGN KEY (livraison_id) REFERENCES livraisons (livraison_id)
    ON DELETE SET NULL
    );

-------------------------------------------------
-- 15) FACTURE (One-to-One with COMMANDE_LINE)
-------------------------------------------------
CREATE TABLE IF NOT EXISTS facture (
                                       facture_id  BIGSERIAL PRIMARY KEY,
                                       date_facture TIMESTAMP,
                                       total       FLOAT,
                                       product_price TEXT,  -- storing JSON or item list


                                       commande_id BIGINT UNIQUE,  -- 1:1 link
                                       CONSTRAINT fk_facture_commande
                                       FOREIGN KEY (commande_id) REFERENCES commande_line (commande_id)
    ON DELETE CASCADE
    );

-- Done! This covers the main tables/relationships in the UML.
