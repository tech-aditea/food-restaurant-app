import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import MenuPage from './pages/MenuPage';  // Import MenuPage
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import AddressPage from './pages/AddressPage';
import Footer from './components/Footer';

const products = [
  { id: 1, name: 'Pizza', description: 'Delicious cheese pizza', price: 12.99, image: '/images/pizza.jpg' },
  { id: 2, name: 'Burger', description: 'Juicy beef burger', price: 9.99, image: '/images/burger.jpg' },
  // Add more products here
];

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/product/:id" element={<ProductPage product={products[0]} />} />
        
        {/* Add route for MenuPage */}
        <Route path="/menu" element={<MenuPage />} />
        
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/address" element={<AddressPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
