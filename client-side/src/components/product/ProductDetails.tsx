import { FC } from 'react';
import { Products } from '../../types/types';
import Button from '../common/Button';

interface ProductDetailsProps {
    product: Products;
    onAddToCart: (product: Products) => void;
}

const ProductDetails: FC<ProductDetailsProps> = ({ product, onAddToCart }) => {
    return (
        <div className="bg-white rounded-md mt-2 ml-20 mr-20 p-10 justify-center item-center">
            <div className='flex gap-10'>
                <div className="w-1/3">
                    <img src={product.productImg} alt={product.productName} className="w-full rounded-md" />
                    <div className='flex flex-wrap gap-2 mt-2 '>
                        <img src={product.productImg} alt={product.productName} className="w-12 h-12 object-cover rounded-md border-2 border-gray-300 hover:border-blue-500" />
                        <img src={product.productImg} alt={product.productName} className="w-12 h-12 object-cover rounded-md border-2 border-gray-300 hover:border-blue-500" />
                        <img src={product.productImg} alt={product.productName} className="w-12 h-12 object-cover rounded-md border-2 border-gray-300 hover:border-blue-500" />
                        <img src={product.productImg} alt={product.productName} className="w-12 h-12 object-cover rounded-md border-2 border-gray-300 hover:border-blue-500" />
                        <img src={product.productImg} alt={product.productName} className="w-12 h-12 object-cover rounded-md border-2 border-gray-300 hover:border-blue-500" />
                        <img src={product.productImg} alt={product.productName} className="w-12 h-12 object-cover rounded-md border-2 border-gray-300 hover:border-blue-500" />
                    </div>
                </div>
                <div className="w-2/3 flex flex-col gap-2">
                    <h1 className="text-2xl font-bold mb-2">{product.productName}</h1>
                    <div className="flex items-center text-sm mb-1">
                        {[...Array(5)].map((_, index) => (
                            <span key={index} className={` text-yellow-500 ${3 < Math.floor(5) ? "block" : "hidden" }`}>★</span>
                        ))}
                        <span>({product.productPrice} avis)</span>
                    </div>
                    <p className="text-gray-600 mb-2">{product.description}</p>
                    <p className="text-2xl font-bold text-gray-900 mb-2">{product.productPrice} Dh</p>
                    {
                        <p className="text-red-500 text-md font-bold mb-2">25% reduction</p>
                    }
                    <Button text='Panier' onClick={() => onAddToCart(product)}/>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;