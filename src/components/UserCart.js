import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function UserCart() {
  const { currentUser } = useAuth();
  const [userCart, setUserCart] = useState();
  
  useEffect(() => {
    const getUserCart = async () => {
      const docs = await getDoc(doc(db, 'users', currentUser.uid));
      setUserCart(docs.data().product);
    }

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
        <p>{item.name}</p>
      ))}
    </div>
  )
}
