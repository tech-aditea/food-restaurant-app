import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-xl">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-green-500 font-bold">${product.price}</span>
          <Link to={`/product/${product.id}`} className="text-blue-500">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
