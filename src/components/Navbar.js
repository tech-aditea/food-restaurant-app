// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-teal-800 fixed top-0 left-0 w-full z-10 p-4 text-white shadow-md">
      <div className="flex justify-between items-center">
        {/* Left side of the navbar (Home link) */}
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-teal-300 font-extrabold text-2xl">AdiTea.</Link></li>
        </ul>
        
        {/* Right side of the navbar (Menu, Cart, Login links) */}
        <ul className="flex space-x-4 ml-auto">
          <li><Link to="/menu" className="hover:text-teal-300">Menu</Link></li>
          <li><Link to="/cart" className="hover:text-teal-300">Cart</Link></li>
          <li><Link to="/login" className="hover:text-teal-300">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
