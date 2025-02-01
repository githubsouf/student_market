import axios from "axios";

const API_URL = "http://localhost:8080/api/products";

export const getProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addProduct = async (product) => {
    const response = await axios.post(API_URL, product);
    return response.data;
};
