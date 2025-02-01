// src/pages/ProductDetailsPage.tsx
import  { FC, useState } from 'react';
import { useParams } from 'react-router';
import ProductDetails from '../components/product/ProductDetails';
import { Products } from '../types/types';
import ProductListPage from "./ProductListPage.tsx";
import {useQuery} from "@tanstack/react-query";
import {fetchProducts} from "../data/products.ts";

const ProductDetailsPage: FC = () => {
    const { id } = useParams();
    const [cart, setCart] = useState<Products[]>([])

    const [page] = useState(0);
    const size = 10; // Nombre d'éléments par page

    // Récupérer les données paginées avec React Query
    const { data, isLoading, isError } = useQuery({
        queryKey: ["products", page],
        queryFn: () => fetchProducts(page, size),
    });

    if (isLoading) return <p>Chargement...</p>;
    if (isError) return <p>Erreur lors du chargement des produits.</p>;

    const product = data?.products.find((p) => p.produitId === Number(id));

    const handleAddToCart = (product: Products) => {
        setCart([...cart, product])
        alert(`${product.productName} ajouté au panier`)
    }

    if(!product) {
        return <p>Produit introuvable</p>
    }

    return (
        <div className="flex gap-10 flex-wrap justify-center">
            <div className="w-3/4">
                <ProductDetails product={product} onAddToCart={handleAddToCart}/>
            </div>
            <div>
                <ProductListPage />
                <ProductListPage />
                <ProductListPage />
            </div>
        </div>

    );
};

export default ProductDetailsPage;