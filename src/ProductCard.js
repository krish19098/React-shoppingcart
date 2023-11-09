import React, { useState } from 'react';
import './ProductCard.css';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<span key={i} className="fa fa-star checked"></span>);
    } else {
      stars.push(<span key={i} className="fa fa-star"></span>);
    }
  }
  

  return (
    <div className="star-ratings">
      {stars}
    </div>
  );
};

const ProductCard = ({ product, inCart, addToCart, removeFromCart, imageSrc }) => {
  const [quantity, setQuantity] = useState(inCart ? 1 : 0); // Start with 1 if already in cart

  const increaseQuantity = () => {
    if (quantity < 15) { // Allow max 2 items in the cart
      setQuantity(quantity + 1);
      addToCart(product);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      if (quantity === 1) {
        removeFromCart(product);
      }
    }
  };

  return (
    <div className="product-card">
      <img src={imageSrc} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Quantity: {quantity}</p>
      <div className="star-rating">
    

        <StarRating rating={product.rating} /> 
      </div>
      
      <div className="cart-buttons">
        <button onClick={decreaseQuantity}>-</button>
        <button onClick={increaseQuantity}>+</button>
      </div>
    </div>
  );
};

export default ProductCard;
