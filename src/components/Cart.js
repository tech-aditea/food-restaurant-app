import React from 'react';

const Cart = ({ cartItems, onRemove }) => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div className="flex">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                <div className="ml-4">
                  <h2 className="text-lg">{item.name}</h2>
                  <p className="text-sm text-gray-600">x {item.quantity}</p>
                </div>
              </div>
              <span className="text-green-500 font-bold">${item.price * item.quantity}</span>
              <button
                onClick={() => onRemove(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
