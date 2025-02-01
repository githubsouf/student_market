import { FC } from 'react';
import { useParams } from 'react-router';
import ProductDetails from '../components/product/ProductDetails';
import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../data/products';
import ProductListPage from "./ProductListPage.tsx";

const ProductDetailsPage: FC = () => {
    const { id } = useParams(); // Récupérer l'ID du produit depuis l'URL

    const { data: product, isLoading, isError } = useQuery({
        queryKey: ['product', id],
        queryFn: () => getProductById(Number(id)), // Utiliser getProductById pour récupérer les données
        enabled: !!id, // Ne pas faire la requête si l'ID n'est pas défini
    });

    if (isLoading) return <p>Chargement...</p>;
    if (isError || !product) return <p>Erreur lors du chargement du produit ou produit introuvable.</p>;

    return (
        <div className="flex gap-10 flex-wrap justify-center">
            <div className="w-3/4">
                <ProductDetails product={product}/>
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
