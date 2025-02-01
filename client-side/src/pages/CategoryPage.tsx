import { FC, useState } from 'react';
import ProductList from '../components/product/ProductList';
import Filter from '../components/ui/Filter';
import { categories } from '../data/data';
import { Products } from '../types/types';
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../data/products.ts";
import { useParams } from "react-router";

const CategoryPage: FC = () => {

    const { category } = useParams(); // Catégorie sélectionnée depuis l'URL
    const [page] = useState(0);
    const size = 10; // Nombre d'éléments par page

    // 🔹 Requête des produits filtrés par catégorie
    const { data, isLoading, isError } = useQuery({
        queryKey: ["products", page, category], // Ajout de `category` à la clé
        queryFn: () => fetchProducts(page, size, category),
    });

    // 🔹 Assurer que `data.products` est toujours un tableau
    const products: Products[] = data?.products ?? [];
    // 🔹 Gérer les filtres
    const [cart, setCart] = useState<Products[]>([]);
    const [filteredProducts, setFilteredProducts] = useState(products);
    console.log(filteredProducts)
    if (isLoading) return <p>Chargement...</p>;
    if (isError) return <p>Erreur lors du chargement des produits.</p>;


    const handleAddToCart = (product: Products) => {
        setCart([...cart, product]);
        alert(`${product.productName} ajouté au panier`);
    };

    const handleFilterSelect = (selectedFilters: string[]) => {
        console.log("products")
        if (selectedFilters.length === 0) {
            setFilteredProducts(products); // Pas de filtre appliqué
        } else {
            setFilteredProducts(products.filter((product) =>
                Array.isArray(product.categories) && // Vérification que c'est un tableau
                product.categories.some((cat) => selectedFilters.includes(cat))
            ));
        }
    };

    return (
        <div className='flex gap-4 flex-wrap justify-center'>
            {/* 🔹 Filtres */}
            <div className="w-1/4">
                <Filter
                    filters={categories.map((c) => c.title)}
                    onFilterSelect={handleFilterSelect}
                />
            </div>

            {/* 🔹 Liste des produits */}
            <div>
                <ProductList count={6} title={"BEST SELLERS"} products={filteredProducts?products:filteredProducts} onAddToCart={handleAddToCart} />
            </div>
        </div>
    );
};

export default CategoryPage;
