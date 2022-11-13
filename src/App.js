import React, { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/style.css';
import Home from './components/Home';
import Shop from './components/Shop';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      return [...prev, item]
    });
    console.log(cart);
  }

  return (
    <Router>
      <nav className='nav'>
        <h1 className="nav--title">Shopping Cart App</h1>
        <Link to='/home' className="nav--link">Home</Link>
        <Link to='/shop' className="nav--link">Shop</Link>
      </nav>
      <div className='cart--info'>
          <p>Cart ({cart.length} item)</p>
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='shop' element={<Shop addToCart={addToCart} />} />
        <Route path='*' element={<p>Woops, nothing here!</p>} />
      </Routes>
    </Router>
  );
}

export default App;
