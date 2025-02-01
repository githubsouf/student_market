import { FC, useState } from 'react';
import { CartItems } from '../../types/types';
import { removeFromCart } from '../../data/cart'; // Méthode pour supprimer l'élément du panier

interface CartItemProps {
    item: CartItems;
    onRemove: (productId: number) => void;
}

const CartItem: FC<CartItemProps> = ({ item, onRemove }) => {
    const [isRemoving, setIsRemoving] = useState(false); // État pour gérer la suppression

    const handleRemove = async () => {
        setIsRemoving(true); // Démarrer la suppression
        await removeFromCart(item.product.produitId); // Supprimer l'article via la méthode asynchrone
        onRemove(item.product.produitId); // Mettre à jour le panier
        setIsRemoving(false); // Fin de la suppression
    };

    return (
        <li className="flex items-center justify-between py-2 border-b">
            <div className="flex items-center gap-2">
                <img src={item.product.productImg} alt={item.product.productName} className="w-12 h-12 object-cover rounded-md" />
                <span>{item.product.productName}</span>
            </div>
            <span className="px-2">{item.quantity} x {item.product.productPrice}Dh</span>
            <button
                onClick={handleRemove}
                className={`text-red-500 hover:text-red-700 ${isRemoving ? 'cursor-not-allowed' : ''}`}
                disabled={isRemoving}
            >
                {isRemoving ? 'Suppression en cours...' : 'Supprimer'}
            </button>
        </li>
    );
};

export default CartItem;
