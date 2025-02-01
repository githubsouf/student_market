import React, { useState } from "react";
import { Menu, Search, User, X } from "lucide-react";
import { logout } from "../services/authService";

type NavbarProps = {
  isLoggedIn: boolean;
  username: string;
  onAuthClick: () => void;
  onLogoClick: () => void;
  onLogout: () => void; // ✅ New prop for logout handling
};

export default function Navbar({ isLoggedIn, username, onAuthClick, onLogoClick, onLogout }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout(); // ✅ Clears token from localStorage
    onLogout(); // ✅ Updates state in `App.tsx`
    onLogoClick(); // ✅ Redirects to homepage
  };

  return (
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button
                  onClick={onLogoClick}
                  className="text-xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                Student Sphere
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative w-64">
                <input
                    type="text"
                    placeholder="Rechercher des produits..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              <button onClick={onLogoClick} className="text-gray-700 hover:text-indigo-600">Accueil</button>
              <button onClick={onLogoClick} className="text-gray-700 hover:text-indigo-600">Marché</button>
              <a href="/forum" className="text-gray-700 hover:text-indigo-600">Forum</a>

              {isLoggedIn ? (
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-700">Bienvenue, {username}</span>
                    <button
                        onClick={handleLogout} // ✅ Call handleLogout()
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
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <button onClick={onLogoClick} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600">Accueil</button>
                <button onClick={onLogoClick} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600">Marché</button>
                <a href="/forum" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Forum</a>

                {isLoggedIn ? (
                    <>
                      <span className="block px-3 py-2 text-gray-700">Bienvenue, {username}</span>
                      <button
                          onClick={handleLogout} // ✅ Call handleLogout()
                          className="w-full text-left px-3 py-2 text-red-500 hover:text-red-700"
                      >
                        Déconnexion
                      </button>
                    </>
                ) : (
                    <button
                        onClick={onAuthClick}
                        className="w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600"
                    >
                      Connexion / Inscription
                    </button>
                )}
              </div>
            </div>
        )}
      </nav>
  );
}
