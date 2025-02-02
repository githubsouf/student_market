import { FC, useEffect, useState } from 'react';
import CartList from '../components/cart/CartList';
import CartSummary from '../components/cart/CartSummary';
import { CartItems } from '../types/types';
import Payment from '../components/ui/Payment';
import {getCart, clearCart, removeFromCart} from '../data/cart';

type CartPageProps = {
    isLoggedIn: boolean;
};
const CartPage: FC<CartPageProps> = ({ isLoggedIn }) => {
    const [items, setItems] = useState<CartItems[]>([]);
    const [showPayment, setShowPayment] = useState(false);
    const [removingItemId, setRemovingItemId] = useState<number | null>(null); // track of the current item being deleted

    useEffect(() => {
        const fetchCart = async () => {
            const cart = await getCart();
            setItems(cart);
        };
        fetchCart();
    }, []);

    const handleRemoveFromCart = async (productId: number) => {
        setRemovingItemId(productId); // Démarrer la suppression
        setItems(items.filter(item => item.product.produitId !== productId));
        await  removeFromCart(productId);
        setRemovingItemId(null);
    };

    const handleCheckout =  () => {
        if (isLoggedIn){
            setShowPayment(true);
        } else {
            alert('Vous devez être connecté pour finaliser la commande');
        }
    };

    const handlePayment = async () => {
        await clearCart();
        setShowPayment(false);
        setItems([]);
        alert('Nous vous remercions');
    };
    const totalPrice = items.reduce((total, item) => total + item.product.productPrice * item.quantity, 0);

    return (
        <div className="ml-30 mr-30">
            {showPayment ? (
                <Payment
                    totalPrice={totalPrice}
                    user={localStorage.getItem("username")??""}
                    cartItems={items}
                    onPayment={handlePayment} />
            ) : (
                <>
                    <CartList items={items} onRemove={handleRemoveFromCart}  removingItemId={removingItemId} />
                    <CartSummary items={items} onCheckout={handleCheckout} isLoggedIn={isLoggedIn} />
                </>
            )}
        </div>
    );
};

export default CartPage;