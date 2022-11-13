import React, { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/style.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      return [...prev, item]
    });
    console.log(cart);
  }

  return (
    <div>
      <nav className='nav'>
        <h1 className="nav--title">Shopping Cart App</h1>
        <Link to='/home' className="nav--link">Home</Link>
        <Link to='/shop' className="nav--link">Shop</Link>
      </nav>
      <main>
        <div className='cart--info'>
          <p>Cart ({cart.length} item)</p>
        </div>
        <Outlet addToCart={addToCart}/>
      </main>
    </div>
  );
}

export default App;
