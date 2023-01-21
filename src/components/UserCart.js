import React, { useEffect, useState } from 'react';
import UserCartItem from './UserCartItem';
import { useCart } from '../contexts/CartContext';

export default function UserCart() {;
  const { cart } = useCart();
  const [currentCart, setCurrentCart] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    try {
      setCurrentCart(cart);
      getTotal();
    } catch(e) {
      console.log(e);
    }

  }, [cart])

  function getTotal() {
        let total = 0;
        cart.map(product => {
            return total += product.qty * product.price
        })
        setTotal(total);
    }

  return (
    <div className='user-cart--container'>
      <h1 className='user--cart--title'>My Cart</h1>
      <h3 className='cart--total'>£{total}</h3>
      {currentCart && currentCart.map(item => (
        <UserCartItem item={item} key={item.id}/>
      ))}
    </div>
  )
}
