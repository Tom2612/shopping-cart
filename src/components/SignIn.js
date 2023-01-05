import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

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
      navigate('/home');
    } catch(e) {
      setError('Failed to sign in.');
    }
    setLoading(false);
  };

  return (
    <div className='container'>
      <div className='card'>
        <h2 className='card--title'>Sign In</h2>
        { error && <h3 className='card--error'>{error}</h3>}
        <div className='card--body'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='email' className='form--label'>Email</label>
            <input type='email' id='email' name='email' ref={emailRef} required className='form--input'></input>
            <label htmlFor='password' className='form--label'>Password</label>
            <input type='password' id='password' name='password' ref={passwordRef} required className='form--input'></input>
            <button type='submit' className='card--btn'>Sign In</button>
          </form>
        </div>
        <div>Need an account? <Link to='/signup'>Sign Up</Link></div>
      </div>
    </div>
  )
}
