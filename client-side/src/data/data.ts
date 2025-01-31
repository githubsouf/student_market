import { Products, CartItems, Conversations, Categories } from '../types/types';

export const categories: Categories[] = [
    { id: "accessories", title: "Accessories", icon: "FaCogs" },
    { id: "apparel", title: "Apparel", icon: "FaTshirt" },
    { id: "books", title: "Books", icon: "FaBook" },
    { id: "footwear", title: "Footwear", icon: "FaShoePrints" },
    { id: "personal-care", title: "Personal Care", icon: "FaShower" },
    { id: "phones", title: "Phones", icon: "FaMobileAlt" },
    { id: "sporting-goods", title: "Sporting Goods", icon: "FaFootballBall" }
];

export const products: Products[] = [
    {
        id: 1,
        title: "Accessories - Produit 1",
        imageUrl: "/images/product1.jpg",
        price: 4000,
        description: "Ceci est la description du produit 1",
        rating: 4.5,
        reviews: 120,
        discount: 67,
        category: "accessories"
    },
    {
        id: 2,
        title: "Apparel - Produit 2",
        imageUrl: "/images/product2.jpg",
        price: 3500,
        description: "Ceci est la description du produit 2",
        rating: 4.2,
        reviews: 90,
        discount: 20,
        category: "apparel"
    },
    {
        id: 3,
        title: "Books - Produit 3",
        imageUrl: "/images/product3.jpg",
        price: 2000,
        description: "Ceci est la description du produit 3",
        rating: 4.8,
        reviews: 150,
        category: "books"
    },
    {
        id: 4,
        title: "Footwear - Produit 4",
        imageUrl: "/images/product4.jpg",
        price: 500,
        description: "Ceci est la description du produit 4",
        rating: 3,
        reviews: 10,
        category: "footwear"
    },
    {
        id: 5,
        title: "Personal Care - Produit 5",
        imageUrl: "/images/product5.jpg",
        price: 1000,
        description: "Ceci est la description du produit 5",
        rating: 3.5,
        reviews: 50,
        category: "personal-care"
    },
    {
        id: 6,
        title: "Sporting Goods - Produit 6",
        imageUrl: "/images/product6.jpg",
        price: 3000,
        description: "Ceci est la description du produit 6",
        rating: 4.0,
        reviews: 75,
        category: "sporting-goods"
    }
];


export const cartItems: CartItems[] = [
    {
        product: products[0],
        quantity: 2,
    },
    {
        product: products[1],
        quantity: 1,
    },
];

export const conversations: Conversations[] = [
    {
        id: 1,
        title: "Conversation 1",
        messages: [
            {
                id: 1,
                text: "Bonjour !",
                sender: 'user',
                date: new Date(),
            },
            {
                id: 2,
                text: "Salut, comment allez-vous ?",
                sender: 'other',
                date: new Date()
            },
        ],
        date: new Date()
    },
    {
        id: 2,
        title: "Conversation 2",
        messages: [
            {
                id: 1,
                text: "Message initial",
                sender: 'user',
                date: new Date(),
            },
            {
                id: 2,
                text: "Message de réponse",
                sender: 'other',
                date: new Date(),
            },
        ],
        date: new Date()
    },
    {
        id: 3,
        title: "Conversation 3",
        messages: [
            {
                id: 1,
                text: "Hey",
                sender: 'user',
                date: new Date(),
            },
            {
                id: 2,
                text: "hey, comment ca va?",
                sender: 'other',
                date: new Date(),
            }

        ],
        date: new Date()
    },
];