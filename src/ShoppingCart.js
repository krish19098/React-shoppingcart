import React, { useState } from 'react';
import './ProductCard.css';
import './ShoppingCart.css';
import ProductCard from './ProductCard';

const Header = ({ cartQuantity }) => (
  <header className="header">
    <h1>Shopping Cart</h1>
    <div className="cart-details">
      <p>Cart Quantity: {cartQuantity}</p>
    </div>
  </header>
);

const Footer = () => (
  <footer className="footer">
    © {new Date().getFullYear()} GK Musicals
  </footer>
);

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const products = [
    { id: 1, name: 'Keyboard', description: 'Musical Instruments', rating: 4.2, price: 10, imgSrc:require('./Images/Keyboard.jpg')},
    { id: 2, name: 'Guitar', description: 'Musical Instruments', rating: 5, price: 20, imgSrc:require('./Images/Guiutar.jpg') },
    { id: 3, name: 'Piano', description: 'Musical Instruments', rating: 3, price: 30, imgSrc:require('./Images/piano.jpg')},
    { id: 4, name: 'violin', description: ' Musical Instruments', rating: 4, price: 50, imgSrc:require('./Images/violin.jpg')},
    { id: 5, name: 'Tabla', description: ' Musical Instruments', rating: 5, price: 20, imgSrc:require('./Images/Tabla.jpg')},
    { id: 6, name: 'Dhol', description: ' Musical Instruments', rating: 3.5, price: 30, imgSrc:require('./Images/dholak.jpg')},
    { id: 7, name: 'Drums', description: ' Musical Instruments', rating: 4.2, price:70, imgSrc:require('./Images/drums.jpg')},
    { id: 8, name: 'flute', description: ' Musical Instruments', rating: 5, price:40, imgSrc:require('./Images/flute.jpg')},
  ];

  const updateCart = (newCart) => {
    setCartItems(newCart);
    setCartQuantity(newCart.length);
  };

  const addToCart = (product) => {
    const newCart = [...cartItems, product];
    updateCart(newCart);
  };

  const removeFromCart = (product) => {
    const newCart = cartItems.filter((item) => item.id !== product.id);
    updateCart(newCart);
  };

  return (
    <div>
      <Header cartQuantity={cartQuantity} />
      <div className="container">
        <h2>Available Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              inCart={cartItems.find((item) => item.id === product.id)}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
