import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
    const { currentUser } = useAuth();

    function handleLogout() {
        console.log('Logged out')
    }

  return (
    <nav className='nav'>
        <h1 className='nav--title'>Sci-fi Book Shop</h1>
        <Link to='/home' className='nav--link'>Home</Link>
        <Link to='/shop' className='nav--link'>Shop</Link>
        {!currentUser && <Link to='/signup' className='nav--link'>Sign Up</Link> }
        { currentUser && <Link to='/cart' className='nav--link user--active'>My Cart</Link> }
        { currentUser && <button className='logout--btn nav--link' onClick={handleLogout}>Log Out</button> }
    </nav>
  )
}
