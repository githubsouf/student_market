import { FC, useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link } from "react-router";

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-gray-900 text-white py-3 px-6 shadow-md">
            <div className="flex justify-between items-center justify-center gap-10">
                {/* Logo et barre de recherche */}
                <div className="flex items-center gap-4">
                    <h1 className="text-xl font-bold">StudentSphere</h1>
                    <div className="relative hidden md:flex">
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            className="border border-gray-500 rounded pl-10 pr-4 py-1 bg-white text-black"
                        />
                        <FaSearch className="absolute left-3 top-2 text-gray-600" />
                    </div>
                </div>

                {/* Navigation Desktop */}
                <nav className="hidden md:flex gap-6">
                    <Link to="/" className="hover:text-gray-400">Accueil</Link>
                    <Link to="/cart" className="flex items-center hover:text-gray-400">
                        <FaShoppingCart className="mr-1" /> Panier
                    </Link>
                    <Link to="/conversations" className="hover:text-gray-400">Blog</Link>
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
                    <Link to="/cart" className="block py-2 hover:text-gray-400">
                        <FaShoppingCart className="inline mr-1" /> Panier
                    </Link>
                    <Link to="/conversations" className="block py-2 hover:text-gray-400">Blog</Link>
                    <Link to="/login" className="block py-2 hover:text-gray-400">
                        <FaUser className="inline mr-1" /> Connexion
                    </Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
