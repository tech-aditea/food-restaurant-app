import React from 'react';

const ProductPage = ({ product }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex">
        <img src={product.image} alt={product.name} className="w-48 h-48 object-cover" />
        <div className="ml-8">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <span className="text-green-500 text-xl mt-4">${product.price}</span>
          <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
