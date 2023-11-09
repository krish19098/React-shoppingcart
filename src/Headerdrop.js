import React, { useState } from 'react';
import './Headerdrop.css'; // Add your CSS file for styling

const Headerdrop = ({ cartItems }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDropdown}>
          About us
        </button>
        {dropdownOpen && (
          <div className="dropdown-content">
            <a href="#">Classes</a>
            <a href="#">Products</a>
            <a href="#">services</a>
          </div>
        )}
      </div>
      {/* <h1>Shopping Cart</h1> */}
      {/* <div className="cart-details">
        <p>Cart Quantity: {cartItems.length}</p>
      </div> */}
    </header>
  );
};

export default Headerdrop;
