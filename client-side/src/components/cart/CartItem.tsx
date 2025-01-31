import  { FC } from 'react';
import { CartItems } from '../../types/types';

interface CartItemProps {
    item: CartItems;
    onRemove: (productId: number) => void;
}

const CartItem: FC<CartItemProps> = ({ item, onRemove }) => {
    return (
        <li className="flex items-center justify-between py-2 border-b">
            <div className="flex items-center gap-2">
                <img src={item.product.imageUrl} alt={item.product.title} className="w-12 h-12 object-cover rounded-md" />
                <span>{item.product.title}</span>
            </div>
            <span className="px-2">{item.quantity} x {item.product.price}Dh</span>
            <button onClick={() => onRemove(item.product.id)} className="text-red-500 hover:text-red-700">Supprimer</button>
        </li>
    );
};

export default CartItem;