import axios from 'axios';
import { CartItems, Products } from '../types/types';

const CART_KEY = 'cart_items';
const BASE_URL = 'http://localhost:8088/api/panier';

// Fonction pour récupérer le token
const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return token ? { Authorization: `Bearer ${token}` } : {};
};

export const isAuthenticated = (): boolean => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");
    return !!(token && storedUsername);
};

// Ajouter un produit au panier
export const addToCart = async (product: Products) => {
    const authenticated = isAuthenticated();
    const userId = localStorage.getItem('userId'); // Get userId from local storage

    if (authenticated && userId) {
        await axios.post(BASE_URL+'/add', { userId:userId, productId: product.produitId, quantity: 1 }, { headers: getAuthHeaders() });
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
    const authenticated = isAuthenticated();
    const userId = localStorage.getItem('userId');

    if (authenticated && userId) {
        const response = await axios.get(`${BASE_URL}/${userId}`, { headers: getAuthHeaders() });
        return response.data;
    } else {
        return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    }
};

// Supprimer un produit du panier
export const removeFromCart = async (productId: number) => {
    const authenticated = isAuthenticated();
    const userId = localStorage.getItem('userId');


    if (authenticated && userId) {
        await axios.delete(`${BASE_URL}/remove?productId=${productId}&userId=${userId}`, { headers: getAuthHeaders() });
    } else {
        let cart: CartItems[] = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
        cart = cart.filter(item => item.product.produitId !== productId);
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }
};

// Vider le panier après commande
export const clearCart = async () => {
    const authenticated = isAuthenticated();
    const userId = localStorage.getItem('userId');

    if (authenticated && userId) {
        await axios.delete(`${BASE_URL}/clear/${userId}`, { headers: getAuthHeaders() });
    }
    localStorage.removeItem(CART_KEY);
};

// Fonction pour récupérer le nombre total d'articles dans le panier
export const getCartItemCount = (): number => {
    const cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    return cart.reduce((total: number, item: { quantity: number }) => total + item.quantity, 0);
};