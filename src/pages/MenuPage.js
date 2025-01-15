// src/pages/MenuPage.js
import React, { useState } from "react";
import { menuItems } from "../data/menuData"; // Import the menu data

const MenuPage = () => {
  // Cart state to hold the items added to the cart
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/09/37/94/82/240_F_937948235_rHVN0jw1teFrIT513NGppB3K1Yu8hLbE.jpg')" }} // Background image
    >
      <div className="container mx-auto py-16 px-4 bg-opacity-75 bg-gray-800 rounded-lg">
        <h1 className="text-4xl font-bold text-center text-white mt-3 mb-8">Menu</h1>

        {/* Menu Categories */}
        {Object.keys(menuItems).map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-3xl font-semibold text-teal-200 mb-4">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {menuItems[category].map((dish) => (
                <div key={dish.id} className="bg-white p-6 rounded-lg shadow-lg">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                  <p className="text-gray-700 mb-4">${dish.price.toFixed(2)}</p>
                  <button
                    onClick={() => addToCart(dish)}
                    className="bg-teal-800 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

         
          
      </div>
    </div>
  );
};

export default MenuPage;
