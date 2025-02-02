import { FC, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router'; // Import modifié
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CartPage from './pages/CartPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CategoryPage from './pages/CategoryPage';
import HomePage from "./pages/HomePage";
import ProductListWithPagination from "./pages/ProductListWithPagination.tsx";
import ForumPage from "./pages/ForumPage.tsx";
import { logout } from "./data/authService";
import AuthModal from "./components/auth/AuthModal";


const App: FC = () => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        const storedUsername = localStorage.getItem("username");

        if (token && storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
        }
    }, []);

    const handleOpenAuthModal = () => {
        setIsAuthModalOpen(true);
    };

    const handleCloseAuthModal = () => {
        setIsAuthModalOpen(false);
    };

    const handleLogout = () => {
        logout();
        setIsLoggedIn(false);
        setUsername("");
        window.location.href = "/"; // Redirect to homepage
    };

    return (
        <Router>
            <div className="flex flex-col min-h-screen w-screen overflow-x-hidden"> {/* Ajout de w-screen ici pour prendre la largeur entière */}
                <Header
                    isLoggedIn={isLoggedIn}
                    username={username}
                    onAuthClick={handleOpenAuthModal}
                    onLogout={() => {
                        setIsLoggedIn(false);
                        setUsername("");
                    }}
                />
                <main className="flex-grow p-4 justify-center items-center">  {/* Suppression de container mx-auto */}
                    <Routes>
                        <Route path="/test" element={<ProductListWithPagination/>}/>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/products/:id" element={<ProductDetailsPage />} />
                        <Route path="/category/:category" element={<CategoryPage />} />
                        <Route path="/cart" element={<CartPage isLoggedIn={isLoggedIn}/>} />
                        <Route path="/conversations" element={<ForumPage />} />
                    </Routes>
                </main>
                <Footer />
                <AuthModal
                    isOpen={isAuthModalOpen}
                    onClose={handleCloseAuthModal}
                    onLoginSuccess={(username) => {
                        setIsLoggedIn(true);
                        setUsername(username);
                    }}
                />
            </div>
        </Router>
    );
};

export default App;