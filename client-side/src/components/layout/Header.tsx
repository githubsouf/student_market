import { FC, useState, useEffect, useRef } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaSearch, FaBell, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router";
import axios from 'axios'; // Importation de axios pour les requêtes AJAX
import { getCartItemCount } from "../../data/cart";
import { API_URL } from '../../data/products.ts';

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [searchQuery, setSearchQuery] = useState(""); // Valeur de la recherche
    const [products, setProducts] = useState([]); // Liste des produits correspondant à la recherche
    const [isLoading, setIsLoading] = useState(false); // Chargement des résultats
    const [error, setError] = useState<string | null>(null); // Erreur de requête
    const [isPopupVisible, setIsPopupVisible] = useState(false); // Contrôler la visibilité du pop-up

    const searchRef = useRef<HTMLInputElement | null>(null); // Référence à l'input de recherche
    const popupRef = useRef<HTMLDivElement | null>(null);

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
                    setProducts(response.data); // Mettre à jour les produits
                    setIsLoading(false);
                    setIsPopupVisible(true); // Afficher le pop-up
                })
                .catch((err) => {
                    setError("Erreur lors de la recherche" + err);
                    setIsLoading(false);
                });
        } else {
            setProducts([]); // Effacer les résultats si la recherche est inférieure à 3 caractères
            setIsPopupVisible(false); // Masquer le pop-up si la recherche est trop courte
        }
    }, [searchQuery]);

    // Cacher le pop-up si l'utilisateur clique en dehors du champ de recherche ou du pop-up
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                searchRef.current && !searchRef.current.contains(event.target as Node) &&
                popupRef.current && !popupRef.current.contains(event.target as Node)
            ) {
                setIsPopupVisible(false); // Masquer le pop-up si l'utilisateur clique à l'extérieur
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    // Fonction pour valider la recherche via le bouton
    const handleSearchSubmit = () => {
        if (searchQuery.length >= 0) {
            // Requête de recherche si l'utilisateur appuie sur le bouton
            axios
                .get(`${API_URL}/search`, { params: { query: searchQuery } })
                .then((response) => {
                    setProducts(response.data);
                })
                .catch(() => {
                    setError("Erreur lors de la recherche");
                });
        }
    };

    return (
        <header className="w-full bg-gray-900 text-white py-3 px-6 shadow-md">
            <div className="flex justify-center items-center gap-10">
                {/* Logo et barre de recherche */}
                <div className="flex items-center justify-center gap-4">
                    <h1 className="text-xl font-bold">StudentSphere</h1>
                    <div className="relative hidden md:flex" ref={searchRef}>
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            className="border border-gray-500 rounded pl-10 pr-4 py-1 bg-white text-black"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)} // Mise à jour de la valeur de la recherche
                        />
                        <FaSearch className="absolute left-3 top-2 text-gray-600" />
                        <button
                            onClick={handleSearchSubmit}
                            className="bg-blue-500 px-4 py-2 rounded ml-2"
                        >
                            Search
                        </button>
                    </div>
                    {isLoading && <div className="text-gray-400">Chargement...</div>}
                    {error && <div className="text-red-500">{error}</div>}

                    {/* Pop-up des résultats de recherche */}
                    {isPopupVisible && products.length > 0 &&  (
                        <div
                            className="absolute mt-42 justify-center item-center bg-white text-black shadow-lg rounded-md"
                            ref={popupRef}
                        >
                            {products.length > 0 &&
                                products.slice(0, 5).map((product: any) => (
                                    <div className="border">
                                        <Link to={`/products/${product.produitId}`} className="hover:text-gray-400">
                                            <span className="font-semibold">{product.productName}</span>
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>

                {/* Navigation Desktop */}
                <nav className="hidden md:flex gap-6 items-center">
                    <Link to="/" className="hover:text-gray-400">Accueil</Link>

                    {/* Panier avec compteur */}
                    <Link to="/cart" className="relative flex items-center hover:text-gray-400">
                        <FaShoppingCart className="mr-1" />
                        Panier
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full px-2">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    <Link to="/conversations" className="hover:text-gray-400">Blog</Link>

                    {/* Notifications */}
                    <Link to="/notifications" className="relative flex items-center hover:text-gray-400">
                        <FaBell className="mr-1" />
                        Notifications
                        <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs rounded-full px-2">
                            3
                        </span>
                    </Link>

                    {/* Aide */}
                    <Link to="/help" className="flex items-center hover:text-gray-400">
                        <FaQuestionCircle className="mr-1" /> Aide
                    </Link>

                    {/* Connexion */}
                    <Link to="/login" className="flex items-center hover:text-gray-400">
                        <FaUser className="mr-1" /> Connexion
                    </Link>
                </nav>

                {/* Menu mobile */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Navigation Mobile */}
            {isOpen && (
                <nav className="md:hidden mt-3 bg-gray-800 p-3 rounded-md">
                    <Link to="/" className="block py-2 hover:text-gray-400">Accueil</Link>

                    <Link to="/cart" className="block py-2 hover:text-gray-400 flex items-center">
                        <FaShoppingCart className="inline mr-1" /> Panier
                        {cartCount > 0 && (
                            <span className="ml-2 bg-red-600 text-white text-xs rounded-full px-2">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    <Link to="/conversations" className="block py-2 hover:text-gray-400">Blog</Link>

                    <Link to="/notifications" className="block py-2 hover:text-gray-400 flex items-center">
                        <FaBell className="inline mr-1" /> Notifications
                        <span className="ml-2 bg-blue-600 text-white text-xs rounded-full px-2">3</span>
                    </Link>

                    <Link to="/help" className="block py-2 hover:text-gray-400 flex items-center">
                        <FaQuestionCircle className="inline mr-1" /> Aide
                    </Link>

                    <Link to="/login" className="block py-2 hover:text-gray-400 flex items-center">
                        <FaUser className="inline mr-1" /> Connexion
                    </Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
