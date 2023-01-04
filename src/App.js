import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, HashRouter } from "react-router-dom";
import './styles/style.css';
import Home from './components/Home';
import Shop from './components/Shop';
import {fakeData } from './utils/Data';
import UserCart from './components/UserCart';
import SignUp from './components/SignUp';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function App() {
  const [data, setData] = useState(fakeData)
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [qty, setQty] = useState([]);
  // const { currentUser } = useAuth();

  useEffect(() => {
    setTotal(cart.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0).toFixed(2));
  }, [cart])

  useEffect(() => {
    setQty(cart.map(item => item.quantity).reduce((a, b) => a + b, 0));
  }, [cart])

  const addToCart = (name, price) => {
    const exists = cart.find(item => item.name === name);
    if (exists) {
      console.log('already in basket!')
    } else {
      setCart((prev) => {
        return [...prev, {name: name, price: price, quantity: 1 }]
      });
    }
  };

  const handleChange = (name, e) => {
    setCart((prev) => {
      return prev.map(item => (item.name === name ? {...item, quantity: e.target.value } : item))
    })
  }
  
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

  const decrement = (name) => {
    const foundItem = cart.find(item => item.name === name);
    if (!foundItem){
      console.log('no such item');
      return;
    } else if (foundItem.quantity === 1) {
      const newCart = cart.filter(item => item !== foundItem);
      setCart(newCart);
    } else {
      setCart(prev => {
        return prev.map(item => (item.name === name ? {...item, quantity: item.quantity - 1} : item
        ));
      });
    }
  }

  return (
    <HashRouter>
      <AuthProvider>
        <nav className='nav'>
          <h1 className="nav--title">Sci-fi Book Shop</h1>
          <Link to='/home' className="nav--link">Home</Link>
          <Link to='/shop' className="nav--link">Shop</Link>
          <Link to='/signup' className="nav--link">Sign Up</Link>
          <Link to='/cart' className="nav--link">My Cart</Link>
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route 
            path='/shop' 
            element={<Shop 
              fakeData={data} 
              addToCart={addToCart} 
              increment={increment} 
              decrement={decrement} 
              cart={cart} 
              handleChange={handleChange} 
              total={total}
              qty={qty}
            />} 
          />
          <Route path='/cart' element={<UserCart />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<p>Woops, nothing here!</p>} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;