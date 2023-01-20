import React from 'react';
import UserCartItem from './UserCartItem';
import { useCart } from '../contexts/CartContext';

export default function UserCart() {;
  const { cart } = useCart()

//Move item controls to here
  const increment = () => {

  }

  const decrement = () => {

  }

  return (
    <div className='user-cart--container'>
      <h1 className='user--cart--title'>My Cart</h1>
      {cart && cart.map(item => (
        <UserCartItem item={item} key={item.id}/>
      ))}
    </div>
  )
}
