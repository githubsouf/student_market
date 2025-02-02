import { FC } from 'react';
import { CartItems } from '../../types/types';
import CartItemComponent from './CartItem';

interface CartListProps {
    items: CartItems[];
    onRemove: (productId: number) => void;
    removingItemId: number | null;
}

const CartList: FC<CartListProps> = ({ items, onRemove , removingItemId}) => {
    return (
        <ul className="bg-white rounded-md shadow-md p-4">
            {items.map((item) => (
                <CartItemComponent key={item.product.produitId} item={item} onRemove={onRemove} removing={removingItemId === item.product.produitId} />
            ))}
        </ul>
    );
};

export default CartList;