import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';


function Login() {

  const [email, setEmail] = useState(''); 
const [password, setPassword] = useState(''); 
const [submitted, setSubmitted] = useState(false);
const handleSubmit = (e) => { 
  e.preventDefault(); 
  setSubmitted(true);
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (submitted) {

      setSubmitted(false);

if(submitted) {
      fetch('https://example.com/api/login',
        {
          method: 'POST', headers: { 'Content-Type': 'application/json', },
          body: JSON.stringify({ email, password }),
        })
        .then((response) => {
          if (!response.ok) { throw new Error('Network response was not ok'); }
          return response.json();
        })
        .then((data) => {
          if (data.success) {
           
            setError(null);
          } else {
            setError('Invalid credentials');
          }
        })
        .catch((error) => { setError(error.message); });
    }
  }
  },
    [submitted, email, password]);



  if (loading) { return <div>Loading...</div>; } 
  if (error) { return <div>Error: {error.message}</div>; }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section>
        <div
          style={{ }}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}> <div>
          
            <input type="email" value={email} placeholder='Email'
            onChange={(e) => setEmail(e.target.value)} required 
            style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }} />
          </div>
            <div>
              
              <input type="password" value={password} placeholder='Password'
              onChange={(e) => setPassword(e.target.value)} required 
              style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }} />
            </div>
            <button type="submit" style={{ width: '100%', padding: '0.5rem', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px' }}> Login </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>

        </div>
       
      </section>
      <footer>
        <a>Forgot Password?</a>
        <a>New User? Register here</a>
      </footer>
    </div>
  );
}

export default Login;
