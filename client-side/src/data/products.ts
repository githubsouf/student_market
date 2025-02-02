import axios from 'axios';
import { Products } from '../types/types';
export const BASE_URL = 'http://localhost:8088';
export const API_URL = 'http://localhost:8088/api/products';
export const CATGORY_PATH = API_URL+'/category';

export const fetchProducts = async (page: number, size: number, category?: string) => {

    const response = await axios.get(API_URL, {
        params: { page, size, category },
        headers: { "Accept": "application/xml" },
    });

    // Convertir le XML en JSON
    const parser = new DOMParser();
    const xml = parser.parseFromString(response.data, "application/xml");
    console.log(xml)
    // Extraire les produits
    const productNodes = xml.getElementsByTagName("products");
    const products: Products[] = Array.from(productNodes).map((node) => ({
        produitId: Number(node.getElementsByTagName("produitId")[0]?.textContent || 0),
        categories: node.getElementsByTagName("categories")[0]?.textContent || "",
        productImg: node.getElementsByTagName("productImg")[0]?.textContent || "",
        productName: node.getElementsByTagName("productName")[0]?.textContent || "",
        productPrice: Number(node.getElementsByTagName("productPrice")[0]?.textContent || 0),
        baseColor: node.getElementsByTagName("baseColor")[0]?.textContent || "",
        description: node.getElementsByTagName("description")[0]?.textContent || "",
        gender: node.getElementsByTagName("gender")[0]?.textContent || "",
        subCategory: node.getElementsByTagName("subCategory")[0]?.textContent || "",
        vendeurId: Number(node.getElementsByTagName("vendeurId")[0]?.textContent || 0),
    }));

    const totalPages = Number(xml.getElementsByTagName("totalPages")[0].textContent);
    const totalElements = Number(xml.getElementsByTagName("totalElements")[0].textContent);

    return { products, totalPages, totalElements };
};

export const getAllProductsWithPagination = async (page: number, size: number): Promise<Products[]> => {
    try {
        const response = await axios.get(`${API_URL}?page=${page}&size=${size}`);
        return response.data.content; // "content" contient les produits paginés
    } catch (error) {
        console.error("Erreur lors de la récupération des produits paginés : ", error);
        return [];
    }
};

// Fonction pour récupérer un produit par son ID
export const getProductById = async (id: number): Promise<Products | null> => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la récupération du produit avec l'ID ${id}:`, error);
        return null;
    }
};

// Fonction pour ajouter un produit
export const addProduct = async (product: Products): Promise<Products | null> => {
    try {
        const response = await axios.post(API_URL, product); // Envoi des données du produit au backend
        return response.data;
    } catch (error) {
        console.error("Erreur lors de l'ajout du produit : ", error);
        return null;
    }
};

// Fonction pour mettre à jour un produit
export const updateProduct = async (id: number, product: Products): Promise<Products | null> => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, product);  // Envoi des nouvelles données du produit
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la mise à jour du produit avec l'ID ${id}:`, error);
        return null;
    }
};

// Fonction pour supprimer un produit
export const deleteProduct = async (id: number): Promise<boolean> => {
    try {
        await axios.delete(`${API_URL}/${id}`);  // Supprime le produit par son ID
        return true;
    } catch (error) {
        console.error(`Erreur lors de la suppression du produit avec l'ID ${id}:`, error);
        return false;
    }
};
