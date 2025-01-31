import { FC } from "react";
import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer: FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                {/* Colonne 1 - Navigation */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">Navigation</h2>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-gray-400">Accueil</Link></li>
                        <li><Link to="/category" className="hover:text-gray-400">Catégories</Link></li>
                        <li><Link to="/cart" className="hover:text-gray-400">Panier</Link></li>
                        <li><Link to="/conversations" className="hover:text-gray-400">Messages</Link></li>
                        <li><Link to="/login" className="hover:text-gray-400">Connexion</Link></li>
                        <li><Link to="/register" className="hover:text-gray-400">Inscription</Link></li>
                    </ul>
                </div>

                {/* Colonne 2 - Contacts */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">Contact</h2>
                    <p>Email : <a href="mailto:support@ecommerce.com" className="hover:text-gray-400">support@ecommerce.com</a></p>
                    <p>Téléphone : <a href="tel:+212600000000" className="hover:text-gray-400">+212 600 000 000</a></p>
                    <p>Adresse : Tanger, Maroc</p>
                </div>

                {/* Colonne 3 - Réseaux sociaux */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">Suivez-nous</h2>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="#" className="hover:text-gray-400"><FaFacebook size={24} /></a>
                        <a href="#" className="hover:text-gray-400"><FaInstagram size={24} /></a>
                        <a href="#" className="hover:text-gray-400"><FaTwitter size={24} /></a>
                        <a href="#" className="hover:text-gray-400"><FaLinkedin size={24} /></a>
                    </div>
                </div>
            </div>

            {/* Ligne de séparation */}
            <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} E-Commerce. Tous droits réservés.</p>
                <p>Projet réalisé par <span className="font-semibold">SYLLA N'FALY & SOUFIANE ABDOUWAHB</span></p>
            </div>
        </footer>
    );
};

export default Footer;
