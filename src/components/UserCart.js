import React, { useEffect, useState } from 'react';
import UserCartItem from './UserCartItem';
import { useCart } from '../contexts/CartContext';

export default function UserCart() {;
  const { cart } = useCart();
  const [currentCart, setCurrentCart] = useState(null);

  useEffect(() => {
    setCurrentCart(cart)
  }, [cart])

  return (
    <div className='user-cart--container'>
      <h1 className='user--cart--title'>My Cart</h1>
      {currentCart && currentCart.map(item => (
        <UserCartItem item={item} key={item.id}/>
      ))}
    </div>
  )
}
