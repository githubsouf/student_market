// import { createContext, useContext, useState, ReactNode } from "react";
// import { Products } from "../types/types";
//
// interface CartItem {
//     product: Products;
//     quantity: number;
// }
//
// interface CartContextType {
//     cartItems: CartItem[];
//     addToCart: (product: Products) => void;
//     removeFromCart: (productId: number) => void;
//     checkout: () => void;
// }
//
// const CartContext = createContext<CartContextType | undefined>(undefined);
//
// export const CartProvider = ({ children }: { children: ReactNode }) => {
//     const [cartItems, setCartItems] = useState<CartItem[]>([]);
//     const { isAuthenticated } = useAuth(); // Vérifier si l'utilisateur est connecté
//
//     const addToCart = (product: Products) => {
//         setCartItems((prev) => {
//             const exists = prev.find((item) => item.product.produitId === product.produitId);
//             if (exists) {
//                 return prev.map((item) =>
//                     item.product.produitId === product.produitId
//                         ? { ...item, quantity: item.quantity + 1 }
//                         : item
//                 );
//             } else {
//                 return [...prev, { product, quantity: 1 }];
//             }
//         });
//     };
//
//     const removeFromCart = (productId: number) => {
//         setCartItems((prev) => prev.filter((item) => item.product.produitId !== productId));
//     };
//
//     const checkout = async () => {
//         if (!isAuthenticated) {
//             alert("Vous devez être connecté pour passer commande.");
//             return;
//         }
//
//         try {
//             await axios.post("http://localhost:8088/api/orders", { items: cartItems });
//             setCartItems([]);
//             alert("Commande validée !");
//         } catch (error) {
//             console.error("Erreur lors de la commande :", error);
//         }
//     };
//
//     return (
//         <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, checkout }}>
//             {children}
//         </CartContext.Provider>
//     );
// };
//
// export const useCart = () => {
//     const context = useContext(CartContext);
//     if (!context) throw new Error("useCart must be used within a CartProvider");
//     return context;
// };
