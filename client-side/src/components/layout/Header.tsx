import { FC, useState, useEffect, useRef } from "react";
import { FaShoppingCart, FaBars, FaTimes, FaSearch, FaBell, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router";
import axios from 'axios';
import { getCartItemCount } from "../../data/cart";
import { API_URL } from '../../data/products.ts';
import { logout } from "../../data/authService";

type HeaderProps = {
    isLoggedIn: boolean;
    username: string;
    onAuthClick: () => void;
    onLogoClick: () => void;
    onLogout: () => void;
};

const Header: FC<HeaderProps> = ({ isLoggedIn, username, onAuthClick, onLogoClick, onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const searchRef = useRef<HTMLInputElement | null>(null);
    const handleLogout = () => {
        logout();
        onLogout();
        onLogoClick();
    };
    // Fonction pour récupérer le nombre d'articles dans le panier
    useEffect(() => {
        const fetchCartCount = async () => {
            const count = await getCartItemCount();
            setCartCount(count);
        };
        fetchCartCount();
    }, []);

    // Fonction pour gérer la recherche (requête AJAX)
    useEffect(() => {
        if (searchQuery.length >= 3) {
            setIsLoading(true);
            axios
                .get(`${API_URL}/search`, { params: { query: searchQuery } })
                .then((response) => {
                    setProducts(response.data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    setError("Erreur lors de la recherche" + err);
                    setIsLoading(false);
                });
        } else {
            setProducts([]);
        }
    }, [searchQuery]);

    const renderNavLinks = () => (
        <>
            <Link to="/" className="hover:text-gray-400">Accueil</Link>
            <Link to="/cart" className="relative flex items-center hover:text-gray-400">
                <FaShoppingCart className="mr-1" /> Panier
                {cartCount > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full px-2">
                        {cartCount}
                    </span>
                )}
            </Link>
            <Link to="/conversations" className="hover:text-gray-400">Blog</Link>
            <Link to="/notifications" className="relative flex items-center hover:text-gray-400">
                <FaBell className="mr-1" /> Notifications
                <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs rounded-full px-2">
                            3
                        </span>
            </Link>
            <Link to="/help" className="flex items-center hover:text-gray-400">
                <FaQuestionCircle className="mr-1" /> Aide
            </Link>
            {isLoggedIn ? (
                <div className="flex items-center space-x-4">
                    <span className="text-gray-300">Bienvenue, {username}</span>
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                        Déconnexion
                    </button>
                </div>
            ) : (
                <button
                    onClick={onAuthClick}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                >
                    Connexion / Inscription
                </button>
            )}
        </>
    );

    return (
        <header className="w-full bg-gray-900 text-white py-3 px-6 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo et barre de recherche */}
                <div className="flex items-center gap-4">
                    <button onClick={onLogoClick} className="text-xl font-bold text-indigo-500 hover:text-indigo-400 transition-colors">StudentSphere</button>
                    <div className="relative hidden md:flex" ref={searchRef}>
                        <input
                            type="text"
                            placeholder="Rechercher des produits..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-black"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <FaSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-600" />
                    </div>
                    {isLoading && <div className="text-gray-400">Chargement...</div>}
                    {error && <div className="text-red-500">{error}</div>}
                </div>
                {products.length > 0 && (
                    <div
                        className="absolute mt-55 w-1/2 justify-center item-center bg-white text-black shadow-lg rounded-md border-t border-gray-300"

                    >
                        {products.slice(0, 5).map((product: any) => (
                            <div key={product.produitId} className="border-b border-gray-200">
                                <Link to={`/products/${product.produitId}`} className="hover:bg-gray-100 block px-4 py-2">
                                    <span className="font-semibold">{product.productName}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}

                {/* Navigation Desktop */}
                <nav className="hidden md:flex gap-6 items-center">
                    {renderNavLinks()}
                </nav>

                {/* Menu mobile */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
            {/* Navigation Mobile */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-md mt-2">
                        {renderNavLinks()}
                    </div>
                </div>
            )}

        </header>
    );
};

export default Header;