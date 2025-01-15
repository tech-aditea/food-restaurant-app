 

import React from 'react';
 

const FamousDishesPage = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Famous Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Dish 1 - Spicy Chai Tea */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <img
              src="https://i.pinimg.com/736x/35/17/34/3517348ceb7f04eddfb559eba8ebda48.jpg"
              alt="Spicy Chai Tea"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Spicy Chai Tea</h3>
            <p className="text-gray-700">A perfect blend of spices and tea, loved by all.</p>
            <p className="text-lg font-bold mb-4">$3.50</p>
            <button className="bg-teal-800 px-4 py-2 text-white rounded-lg">
              Add to Cart
            </button>
          </div>

          {/* Dish 2 - Aditea Special Bun */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <img
              src="https://i.pinimg.com/736x/76/90/21/769021ebfff6cf53523722823521a3df.jpg"
              alt="Aditea Special Bun"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Aditea Special Bun</h3>
            <p className="text-gray-700">Soft, fluffy, and the perfect tea companion.</p>
            <p className="text-lg font-bold mb-4">$2.50</p>
            <button className="bg-teal-800 px-4 py-2 text-white rounded-lg">
              Add to Cart
            </button>
          </div>

          {/* Dish 3 - Chickpea Curry */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <img
              src="https://i.pinimg.com/736x/e1/33/2a/e1332ab4a8cc651f278da71986def03c.jpg"
              alt="Chickpea Curry"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Chickpea Curry</h3>
            <p className="text-gray-700">A flavorful curry that brings the taste of tradition.</p>
            <p className="text-lg font-bold mb-4">$5.00</p>
            <button className="bg-teal-800 px-4 py-2 text-white rounded-lg">
              Add to Cart
            </button>
          </div>

          {/* Dish 4 - Signature Samosas */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
            <img
              src="https://i.pinimg.com/736x/1b/da/ca/1bdaca54b40441bc8a1bccc733e3ca43.jpg"
              alt="Signature Samosas"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Signature Samosas</h3>
            <p className="text-gray-700">Crispy, spicy, and utterly delicious samosas.</p>
            <p className="text-lg font-bold mb-4">$4.00</p>
            <button className="bg-teal-800 px-4 py-2 text-white rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>

         
      </div>
    </section>
  );
};

export default FamousDishesPage;
