import React, { useState } from 'react';
import ShoppingCart from './ShoppingCart';
import './ShoppingCart.css';
import Headerdrop from './Headerdrop';

function App() {
  const [cartItems, setCartItems] = useState([]); // Initialize cartItems

  return (
    <div className="App">
      <Headerdrop cartItems={cartItems} /> {/* Pass cartItems to Headerdrop */}
      <ShoppingCart setCartItems={setCartItems} cartItems={cartItems} /> {/* Pass cartItems and setCartItems to ShoppingCart */}
    </div>
  );
}

export default App;
