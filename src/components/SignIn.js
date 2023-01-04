import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
//   const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    // e.preventDefault();

    // if (passwordConfirmRef.current.value !== passwordRef.current.value) {
    //   return setError('Passwords do not match!');
    // }

    // try {
    //   setError('');
    //   setLoading(true);
    //   await signup(emailRef.current.value, passwordRef.current.value);
    //   console.log('signed up!');
    //   navigate('/home')
    // } catch(e) {
    //     console.log('Failed to sign up', e.message);
    // }
    // setLoading(false);
    
  }
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
