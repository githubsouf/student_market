// src/utils/cart.ts
import axios from 'axios';
import { CartItems, Products } from '../types/types';

const CART_KEY = 'cart_items';

// Vérifier si l'utilisateur est authentifié
export const isAuthenticated = async (): Promise<boolean> => {
    try {
        const response = await axios.get('http://localhost:8088/api/auth/me');
        return response.status === 200;
    } catch {
        return false;
    }
};

// Ajouter un produit au panier
export const addToCart = async (product: Products) => {
    const authenticated = await isAuthenticated();

    if (authenticated) {
        await axios.post('http://localhost:8088/api/cart', { productId: product.produitId, quantity: 1 });
    } else {
        let cart: CartItems[] = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
        const existingItem = cart.find(item => item.product.produitId === product.produitId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ product, quantity: 1 });
        }

        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }
};

// Récupérer le panier
export const getCart = async (): Promise<CartItems[]> => {
    const authenticated = await isAuthenticated();

    if (authenticated) {
        const response = await axios.get('http://localhost:8088/api/cart');
        return response.data;
    } else {
        return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    }
};

// Supprimer un produit du panier
export const removeFromCart = async (productId: number) => {
    const authenticated = await isAuthenticated();

    if (authenticated) {
        await axios.delete(`http://localhost:8088/api/cart/${productId}`);
    } else {
        let cart: CartItems[] = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
        cart = cart.filter(item => item.product.produitId !== productId);
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }
};

// Vider le panier après commande
export const clearCart = async () => {
    const authenticated = await isAuthenticated();

    if (authenticated) {
        await axios.delete('http://localhost:8088/api/cart');
    }

    localStorage.removeItem(CART_KEY);
};

// Fonction pour récupérer le nombre total d'articles dans le panier
export const getCartItemCount = (): number => {
    // Récupérer le panier depuis le localStorage (ou un state global type Redux/Zustand)
    const cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");

    // Compter le nombre total d'articles
    return cart.reduce((total: number, item: { quantity: number }) => total + item.quantity, 0);
};
