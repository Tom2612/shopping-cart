import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function UserCart() {
  // const { currentUser } = useAuth();

  return (
    <div className='user-cart--container'>
      <h1>You can't see this!</h1>
      {/* {currentUser.email} */}
    </div>
  )
}
