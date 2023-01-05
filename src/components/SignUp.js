import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordConfirmRef.current.value !== passwordRef.current.value) {
      return setError('Passwords do not match!');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      console.log('signed up!');
      navigate('/home');
    } catch(e) {
      setError('Failed to create an account.');
    }
    setLoading(false);
  };

  return (
    <div className='card'>
      <h2 className='card--title'>Sign Up</h2>
      { error && <h3 className='card--error'>{error}</h3>}
      <div className='card--body'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email' className='form--label'>Email</label>
          <input type='email' id='email' name='email' ref={emailRef} required className='form--input'></input>
          <label htmlFor='password' className='form--label'>Password</label>
          <input type='password' id='password' name='password' ref={passwordRef} required className='form--input'></input>
          <label htmlFor='password-confirm' className='form--label'>Confirm Password</label>
          <input type='password' id='password-confirm' name='password-confirm' ref={passwordConfirmRef} required className='form--input'></input>
          <button type='submit' className='card--btn'>Sign Up</button>
        </form>
      </div>
      <div>Already have an account? <Link to='/signin'>Sign In</Link></div>
    </div>
  )
}
