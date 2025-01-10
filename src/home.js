import logo from './logo.svg';
import './App.css';
import './Menu.css';
import React, { useState } from 'react';



function App() {

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
        <h1>Bayer Healthcare</h1>
        <nav className="horizontal-menu"> 
          <ul> 
            <li><a href="#home">Home</a></li> 
            <li><a href="#health-topics">Health Topics</a></li> 
            <li><a href="#resources">Resources</a></li> 
            <li><a href="#about-us">About Us</a></li> 
            <li><a href="#contact">Contact</a></li> 
            </ul> 
          </nav>
      </header>
      <section>
        <div
          style={{ }}>
          <h2>Your Health, Our Priority</h2>
          <h4>Explore the latest health information and resources from Bayer Healthcare</h4>

        </div>
       
      </section>
      <footer>
        <a>Forgot Password?</a>
        <a>New User? Register here</a>
      </footer>
    </div>
  );
}

export default App;
