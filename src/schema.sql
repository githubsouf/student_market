CREATE TABLE products (
    produitid SERIAL PRIMARY KEY,
    categories VARCHAR(255) NOT NULL,
    product_img TEXT NOT NULL,
    product_name TEXT NOT NULL,
    product_price DOUBLE PRECISION NOT NULL,
    basecolor VARCHAR(50),
    description TEXT NOT NULL,
    gender VARCHAR(50) NOT NULL,
    subcategory VARCHAR(100),
    vendeurid BIGINT NOT NULL
);
