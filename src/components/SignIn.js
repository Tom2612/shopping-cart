import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signin } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      console.log('signed in!');
      navigate('/home')
    } catch(e) {
        console.log('Failed to sign in', e.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Sign In</h2>
      { error && <h3>{error}</h3>}
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' ref={emailRef} required></input>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' ref={passwordRef} required></input>
        <button type='submit'>Sign In</button>
      </form>
    </div>
  )
}
