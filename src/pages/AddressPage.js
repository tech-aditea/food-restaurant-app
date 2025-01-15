import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddressPage = () => {
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (address) {
      // Store the address and proceed to confirmation or checkout
      navigate('/cart');
    } else {
      alert("Please enter a valid address.");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Enter Delivery Address</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600" htmlFor="address">Address</label>
          <input 
            type="text" 
            id="address" 
            value={address}
            onChange={(e) => setAddress(e.target.value)} 
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            required 
          />
        </div>

        <button 
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Submit Address
        </button>
      </form>
    </div>
  );
};

export default AddressPage;
