// src/pages/CartPage.tsx
import  { FC, useState } from 'react';
import CartList from '../components/cart/CartList';
import CartSummary from '../components/cart/CartSummary';
import { cartItems } from '../data/data';
import { CartItems } from '../types/types';
import Payment from '../components/ui/Payment';


const CartPage: FC = () => {
    const [items, setItems] = useState<CartItems[]>(cartItems)
    const [showPayment, setShowPayment] = useState<boolean>(false)


    const handleRemoveFromCart = (productId: number) => {
        setItems(items.filter(item => item.product.id !== productId))
    }

    const handleCheckout = () => {
        setShowPayment(true)
    }

    const handlePayment = () => {
        setShowPayment(false)
        setItems([])
        alert('Paiement effectué')
    }

    return (
        <div className="ml-30 mr-30">
            {showPayment ? (<Payment onPayment={handlePayment}/>) : (
                <>
                    <CartList items={items} onRemove={handleRemoveFromCart} />
                    <CartSummary items={items} onCheckout={handleCheckout} />
                </>
            )}

        </div>
    );
};

export default CartPage;