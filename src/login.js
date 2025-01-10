import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';



function Login() {

  const [email, setEmail] = useState(''); 
const [password, setPassword] = useState(''); 
const handleSubmit = (e) => { 
  e.preventDefault(); 
  // Here you would typically handle login logic, like sending a request to the server.
  //  console.log('Email:', email); console.log('Password:', password);
  };

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
