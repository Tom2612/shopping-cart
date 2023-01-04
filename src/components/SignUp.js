import React, { useRef, useState } from 'react'

export default function SignUp() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordConfirmRef.current.value !== passwordRef.current.value) {
      return setError('Passwords do not match!');
    }
    
  }
  return (
    <div>
      <h2>Sign Up</h2>
      { error && <h3>{error}</h3>}
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' ref={emailRef} required></input>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' ref={passwordRef} required></input>
        <label htmlFor='password-confirm'>Confirm Password</label>
        <input type='password' id='password-confirm' name='password-confirm' ref={passwordConfirmRef} required></input>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}
