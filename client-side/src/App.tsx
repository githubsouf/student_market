import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router'; // Import modifié
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CartPage from './pages/CartPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CategoryPage from './pages/CategoryPage';
import HomePage from "./pages/HomePage";
import ProductListWithPagination from "./pages/ProductListWithPagination.tsx";
import ForumPage from "./pages/ForumPage.tsx";


const App: FC = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen w-screen overflow-x-hidden"> {/* Ajout de w-screen ici pour prendre la largeur entière */}
                <Header />
                <main className="flex-grow p-4 justify-center items-center">  {/* Suppression de container mx-auto */}
                    <Routes>
                        <Route path="/test" element={<ProductListWithPagination/>}/>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/products/:id" element={<ProductDetailsPage />} />
                        <Route path="/category/:category" element={<CategoryPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/conversations" element={<ForumPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;