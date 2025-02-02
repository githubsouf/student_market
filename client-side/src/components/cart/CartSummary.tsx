import { FC } from 'react';
import { CartItems } from '../../types/types';
import Button from '../common/Button';

interface CartSummaryProps {
    items: CartItems[];
    onCheckout: () => void; // onCheckout est maintenant une fonction (callback)
    isLoggedIn : boolean;
}

const CartSummary: FC<CartSummaryProps> = ({ items, onCheckout, isLoggedIn }) => {


    const totalPrice = items.reduce((total, item) => total + item.product.productPrice * item.quantity, 0);

    return (
        <div className="bg-white p-4 shadow rounded-md">
            <h2 className="text-xl font-bold mb-4">Résumé du panier</h2>
            <div className="flex justify-between mb-2">
                <span>Total:</span>
                <span>{totalPrice}Dh</span>
            </div>
            {isLoggedIn ? (
                <Button text="Commander" onClick={onCheckout} />
            ) : (
                <p className="text-red-500">Connectez-vous pour finaliser la commande</p>
            )}
        </div>
    );
};

export default CartSummary;