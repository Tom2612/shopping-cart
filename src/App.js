import React, { useState, useEffect } from 'react';
import { Link, Outlet } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './styles/style.css';
import Home from './components/Home';
import Shop from './components/Shop';
import {fakeData } from './utils/Data';

function App() {
  const [cart, setCart] = useState([{name: 'Carrots', price: 0.7, quantity: 3 }]);
  

  const addToCart = (name, price, e) => {
    setCart((prev) => {
      return [...prev, {name: name, price: price, quantity: 1 }]
    });
  };
  
  const increment = (name) => {
    //This on works below

    // const exists = cart.find((x) => x.name === name);
    // if (exists) {
    //   setCart(cart.map(item => item.name === name ? {...exists, quantity: exists.quantity + 1 } : item));
    // } else {
    //   setCart([...cart])
    // }

    //This one also works now
    setCart((prev) => {
      return prev.map(item => ( item.name === name ? {...item, quantity: item.quantity + 1 } : item ));
    });
  };

  return (
    <Router>
      <nav className='nav'>
        <h1 className="nav--title">Shopping Cart App</h1>
        <Link to='/home' className="nav--link">Home</Link>
        <Link to='/shop' className="nav--link">Shop</Link>
      </nav>
      {cart.length > 0 && <div className='cart--info'>
            <p>Cart ({cart.length} item)</p>
            <p>{cart[0].name}</p>
            <p>{cart[0].price}</p>
            <p>{cart[0].quantity}</p>
        </div>
      }
      <Routes>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='shop' element={<Shop fakeData={fakeData} addToCart={addToCart} increment={increment} />} />
        <Route path='*' element={<p>Woops, nothing here!</p>} />
      </Routes>
    </Router>
  );
}

export default App;
