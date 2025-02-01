import { FC, useState, useEffect } from 'react';
import { CartItems } from '../../types/types';
import Button from '../common/Button';
import { isAuthenticated } from '../../data/cart';

interface CartSummaryProps {
    items: CartItems[];
    onCheckout: () => void;
}

const CartSummary: FC<CartSummaryProps> = ({ items, onCheckout }) => {
    const [auth, setAuth] = useState<boolean>(false);

    useEffect(() => {
        const checkAuth = async () => {
            setAuth(await isAuthenticated());
        };
        checkAuth();
    }, []);

    const totalPrice = items.reduce((total, item) => total + item.product.productPrice * item.quantity, 0);

    return (
        <div className="bg-white p-4 shadow rounded-md">
            <h2 className="text-xl font-bold mb-4">Résumé du panier</h2>
            <div className="flex justify-between mb-2">
                <span>Total:</span>
                <span>{totalPrice}Dh</span>
            </div>
            {auth ? (
                <Button text="Commander" onClick={onCheckout} />
            ) : (
                <p className="text-red-500">Connectez-vous pour finaliser la commande</p>
            )}
        </div>
    );
};

export default CartSummary;
