import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function UserCart() {
  const { currentUser } = useAuth();
  const [userCart, setUserCart] = useState();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const docSnap = async () => {
      const docs = await getDoc(doc(db, 'users', currentUser.uid));
      setUserCart(docs.data().cart);

      console.log(docs.data().cart)
    }
    docSnap();
    setLoading(true);
    
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [userCart])

  if(userCart === undefined) {
    return null
  }

  return (
    <div className='user-cart--container'>
      <h1>My Cart</h1>
      <p>{currentUser.email}</p>
      {userCart && userCart.map(item => {
        <p>{item.name}</p>
      })}
    </div>
  )
}
