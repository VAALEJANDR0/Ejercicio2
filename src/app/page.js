"use client"

import { useState } from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';


const HomePage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: quantity } : item
    ));
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="container-fluid">
      <div className="row bg-dark text-light p-3 fixed-top">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <h1 className="mb-0">Jaguar Sport</h1>
          <button 
            className="btn btn-outline-light position-relative" 
            onClick={toggleCartVisibility}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1a1 1 0 0 1 1-1h1.38l.397 1H15a1 1 0 0 1 .95 1.316l-1.5 6A1 1 0 0 1 13.5 9H4.128l-.466 1.244A1 1 0 0 1 3 11H1a1 1 0 1 1 0-2h1.25l.154-.411L4.3 2H1a1 1 0 0 1-1-1zM2.25 3h10.946l1.292 5H4.978l-2.49-5zM5.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
            </svg>
            {cartItems.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItems.length}
                <span className="visually-hidden">productos en el carrito</span>
              </span>
            )}
          </button>
        </div>
      </div>
      <div className="row mt-5 pt-5">
        <div className="col-md-8">
          <ProductList addToCart={addToCart} />
        </div>
        {cartVisible && (
          <div className="col-md-4">
            <Cart 
              cartItems={cartItems} 
              updateQuantity={updateQuantity} 
              removeFromCart={removeFromCart} 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
