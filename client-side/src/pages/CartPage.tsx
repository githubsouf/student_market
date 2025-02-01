import { FC, useEffect, useState } from 'react';
import CartList from '../components/cart/CartList';
import CartSummary from '../components/cart/CartSummary';
import { CartItems } from '../types/types';
import Payment from '../components/ui/Payment';
import { getCart, removeFromCart, clearCart } from '../data/cart';

const CartPage: FC = () => {
    const [items, setItems] = useState<CartItems[]>([]);
    const [showPayment, setShowPayment] = useState<boolean>(false);

    useEffect(() => {
        const fetchCart = async () => {
            const cart = await getCart();
            setItems(cart);
        };
        fetchCart();
    }, []);

    const handleRemoveFromCart = async (productId: number) => {
        await removeFromCart(productId);
        setItems(items.filter(item => item.product.produitId !== productId));
    };

    const handleCheckout = async () => {
        setShowPayment(true);
    };

    const handlePayment = async () => {
        await clearCart();
        setShowPayment(false);
        setItems([]);
        alert('Paiement effectué');
    };

    return (
        <div className="ml-30 mr-30">
            {showPayment ? (
                <Payment onPayment={handlePayment} />
            ) : (
                <>
                    <CartList items={items} onRemove={handleRemoveFromCart} />
                    <CartSummary items={items} onCheckout={handleCheckout} />
                </>
            )}
        </div>
    );
};

export default CartPage;
