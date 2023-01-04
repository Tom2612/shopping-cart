import React from 'react';
import { Link } from "react-router-dom";
import { Route, Routes, HashRouter } from "react-router-dom";
import './styles/style.css';
import Home from './components/Home';
import Shop from './components/Shop';
import UserCart from './components/UserCart';
import SignUp from './components/SignUp';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function App() {
 
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
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<UserCart />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<p>Woops, nothing here!</p>} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;