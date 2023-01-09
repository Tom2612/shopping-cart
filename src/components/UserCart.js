import React, { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function UserCart() {
  const { currentUser } = useAuth();
  
  useEffect(() => {
    const docSnap = async () => {
      const docRef = doc(db, 'users', currentUser.uid);
      const docs = await getDoc(docRef);
      console.log(docs.data())
      return docs;
    }
    docSnap();
    
  }, [])

  return (
    <div className='user-cart--container'>
      <h1>You can't see this!</h1>
      {currentUser.email}
    </div>
  )
}
