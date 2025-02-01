import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Marketplace from "./pages/Marketplace";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import { logout } from "./services/authService";

function App() {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    // Check login state on load
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
            <div className="min-h-screen flex flex-col">
                <Navbar
                    isLoggedIn={isLoggedIn}
                    username={username}
                    onAuthClick={handleOpenAuthModal}
                    onLogout={() => {
                        setIsLoggedIn(false);
                        setUsername("");
                    }}
                />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Marketplace />} />
                        <Route
                            path="/dashboard"
                            element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
                        />
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
                />            </div>
        </Router>
    );
}

export default App;
