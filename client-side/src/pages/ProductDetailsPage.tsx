// src/pages/ProductDetailsPage.tsx
import  { FC, useState } from 'react';
import { useParams } from 'react-router';
import ProductDetails from '../components/product/ProductDetails';
import { products } from '../data/data';
import { Products } from '../types/types';
import ProductListPage from "./ProductListPage.tsx";

const ProductDetailsPage: FC = () => {
    const { id } = useParams();
    const [cart, setCart] = useState<Products[]>([])

    const product = products.find((p) => p.id === Number(id));

    const handleAddToCart = (product: Products) => {
        setCart([...cart, product])
        alert(`${product.title} ajouté au panier`)
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