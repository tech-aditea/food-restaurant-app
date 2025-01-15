import React, { useState } from 'react';
import Cart from '../components/Cart';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <Cart cartItems={cartItems} onRemove={removeItem} />
    </div>
  );
};

export default CartPage;
