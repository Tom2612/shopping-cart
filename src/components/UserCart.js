import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import UserCartItem from './UserCartItem';

export default function UserCart() {
  const { currentUser } = useAuth();
  const [userCart, setUserCart] = useState();
  
  useEffect(() => {
    const getUserCart = async() => {
      const arr = [];
      const cartRef = collection(db, `user ${currentUser.uid}`);
      const cartSnap = await getDocs(cartRef);
        cartSnap.forEach((doc) => {
          arr.push(doc.data());
        });     
        setUserCart(arr);
    };

    getUserCart();

  }, []);

//Move item controls to here
  const increment = () => {

  }

  const decrement = () => {

  }

  return (
    <div className='user-cart--container'>
      <h1>My Cart</h1>
      <p>{currentUser.email}</p>
      {userCart && userCart.map(item => (
        <UserCartItem item={item} key={item.id}/>
      ))}
    </div>
  )
}
