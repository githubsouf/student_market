import { FC } from "react";
import { Products } from "../../types/types";
import ProductCard from "./ProductCard";

interface ProductListProps {
    products: Products[];
    onAddToCart: (product: Products) => void;
    count: number;
    title: string;
}

const ProductList: FC<ProductListProps> = ({
                                               products,
                                               onAddToCart,
                                                title,count
                                           }) => {
    return (

        <div className="relative mr-30 ml-30">
            {/* Texte en haut à gauche */}
            {title!=''&&(
            <div className="absolute top-0 left-0 bg-gray-800 text-white px-4 py-2 rounded-br-lg shadow-md">
                {title}
            </div>
            )}
            {/* Liste des produits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 pt-12">
                {products.slice(0, count).map((product) => (
                    <ProductCard key={product.produitId} product={product} onAddToCart={onAddToCart} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
