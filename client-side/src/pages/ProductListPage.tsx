import {FC, useState} from 'react';
import ProductList from '../components/product/ProductList';
import {Products} from '../types/types';
import {useQuery} from "@tanstack/react-query";
import {fetchProducts} from "../data/products.ts";

interface ProductListPageProps {
    count?: number,
    title?: string,
    className?: string
}

const ProductListPage: FC<ProductListPageProps> = ({
                                                       count = 6,
                                                       title = "",
                                                       className='mb-10'
                                                   }) => {
    const [cart, setCart] = useState<Products[]>([])
    const handleAddToCart = (product: Products) => {
        setCart([...cart, product])
        alert(`${product.productName} ajouté au panier`)
    }

    const [page] = useState(0);
    const size = count; // Nombre d'éléments par page

    // Récupérer les données paginées avec React Query
    const { data, isLoading, isError } = useQuery({
        queryKey: ["products", page],
        queryFn: () => fetchProducts(page, size),
    });

    if (isLoading) return <p>Chargement...</p>;
    if (isError) return <p>Erreur lors du chargement des produits.</p>;


    return (
        <div className={className}>
            <ProductList products={data?.products ?? []} title={title} count={count} onAddToCart={handleAddToCart}/>
        </div>
    );
};

export default ProductListPage;