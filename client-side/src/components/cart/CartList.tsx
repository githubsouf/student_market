import { FC } from 'react';
import { CartItems } from '../../types/types';
import CartItemComponent from './CartItem';

interface CartListProps {
    items: CartItems[];
    onRemove: (productId: number) => void;
}

const CartList: FC<CartListProps> = ({ items, onRemove }) => {
    return (
        <ul className="bg-white rounded-md shadow-md p-4">
            {items.map((item) => (
                <CartItemComponent key={item.product.id} item={item} onRemove={onRemove} />
            ))}
        </ul>
    );
};

export default CartList;