import { FC } from 'react';
import { CartItems } from '../../types/types';
import Button from '../common/Button';


interface CartSummaryProps {
    items: CartItems[];
    onCheckout: () => void;
}

const CartSummary: FC<CartSummaryProps> = ({ items, onCheckout }) => {

    const totalPrice = items.reduce((total, item) => total + (item.product.price * item.quantity), 0);

    return (
        <div className="bg-white p-4 shadow rounded-md">
            <h2 className="text-xl font-bold mb-4">Résumé du panier</h2>
            <div className="flex justify-between mb-2">
                <span>Total:</span>
                <span>{totalPrice}Dh</span>
            </div>
            <Button text='Commander' onClick={onCheckout} />
        </div>
    );
};

export default CartSummary;