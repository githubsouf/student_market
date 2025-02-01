import { FC, useState } from 'react';
import { Products } from '../../types/types';
import Button from '../common/Button';
import { addToCart } from '../../data/cart';

interface ProductCardProps {
    product: Products;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const [message, setMessage] = useState('');

    const handleAddToCart = async () => {
        await addToCart(product);
        setMessage('Produit ajouté au panier !');
        setTimeout(() => setMessage(''), 2000);
    };

    return (
        <div className="bg-white shadow rounded-md p-4 min-w-50">
            <img src={product.productImg} alt={product.productName} className="w-full h-32 object-cover mb-2 rounded-md" />
            <h3 className="text-lg font-semibold mb-1">
                <a href={`/products/${product.produitId}`}>{product.productName}</a>
            </h3>
            <p className="text-gray-600 mb-2">{product.productPrice}Dh</p>
            <Button text="Panier" onClick={handleAddToCart} />
            {message && <p className="text-green-500">{message}</p>}
        </div>
    );
};

export default ProductCard;
