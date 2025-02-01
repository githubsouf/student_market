import {useState} from 'react';
import {fetchProducts} from '../data/products';
import {Products} from '../types/types';
import { useQuery } from "@tanstack/react-query";

const ProductListWithPagination = () => {
    const [page, setPage] = useState(0);
    const size = 10; // Nombre d'éléments par page

    // Récupérer les données paginées avec React Query
    const { data, isLoading, isError } = useQuery({
        queryKey: ["products", page],
        queryFn: () => fetchProducts(page, size),
    });

    if (isLoading) return <p>Chargement...</p>;
    if (isError) return <p>Erreur lors du chargement des produits.</p>;

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Liste des Produits</h2>
            <ul className="border p-4 rounded shadow">
                {data?.products.map((product: Products) => (
                    <li key={product.produitId} className="border-b p-2">
                        {product.productName} - {product.productPrice} €
                    </li>
                ))}
            </ul>

            {/* Pagination */}
            <div className="flex justify-between mt-4">
                <button
                    disabled={page === 0}
                    onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                    className="px-3 py-1 border rounded"
                >
                    Précédent
                </button>
                <span>Page {page + 1} / {data?.totalPages}</span>
                <button
                    disabled={page >= (data?.totalPages || 1) - 1}
                    onClick={() => setPage((prev) => prev + 1)}
                    className="px-3 py-1 border rounded"
                >
                    Suivant
                </button>
            </div>
        </div>
    );
};

export default ProductListWithPagination;
