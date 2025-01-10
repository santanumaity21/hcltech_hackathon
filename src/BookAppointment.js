

import './BookAppointmnetLayout.css';
import './table.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {

  

  return (
    
      <Router> <div> <nav> <ul> <li>
          <Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
      </ul>
      </nav>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} /> </Routes>
      </div>

      </Router>
       
  );
}

export default App;
