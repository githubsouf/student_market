import  { FC } from 'react';
import { Products } from '../../types/types';
import Button from '../common/Button';

interface ProductCardProps {
    product: Products;
    onAddToCart: (product:Products) => void;
}

const ProductCard: FC<ProductCardProps> = ({ product, onAddToCart }) => {
    return (
        <div className="bg-white shadow rounded-md p-4 min-w-50">
            <img src={product.imageUrl} alt={product.title} className="w-full h-32 object-cover mb-2 rounded-md" />
            <h3 className="text-lg font-semibold mb-1"><a
                href={`/products/${product.id}`}>{product.title}</a></h3>
            <p className="text-gray-600 mb-2">{product.price}Dh</p>
            <Button text='Panier' onClick={() => onAddToCart(product)} />
        </div>
    );
};

export default ProductCard;