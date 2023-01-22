import React from 'react';
import UserCartItem from './UserCartItem';
import { useCart } from '../contexts/CartContext';

export default function UserCart() {;
  const { cart, total } = useCart();

  return (
    <div className='user-cart--container'>
      <h1 className='user--cart--title'>My Cart</h1>
      <h3 className='cart--total'>£{total}</h3>
      {cart && cart.map(item => (
        <UserCartItem item={item} key={item.id}/>
      ))}
      {(!cart || cart.length === 0) && <p>Nothing in your cart yet</p>}
    </div>
  )
}
