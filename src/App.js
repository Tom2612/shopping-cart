import React from 'react';
import { Link } from "react-router-dom";
import { Route, Routes, HashRouter } from "react-router-dom";
import './styles/style.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import UserCart from './components/UserCart';
import SignUp from './components/SignUp';
import { AuthProvider } from './contexts/AuthContext';
import SignIn from './components/SignIn';
import PrivateRoute from './components/PrivateRoute';

function App() {
 
  return (
    <HashRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<PrivateRoute><UserCart /></PrivateRoute>} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='*' element={<p>Woops, nothing here!</p>} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;