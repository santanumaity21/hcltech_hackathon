

import './BookAppointmnetLayout.css';
import './table.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import Login from './login';
import DoctorDashboard from './doctor';
import BookAppointment from './BookAppointment';

function App() {

  const [selectedOption, setSelectedOption] = useState(''); 
  const handleSelectChange = (e) => { setSelectedOption(e.target.value); };

  const [startDate, setStartDate] = useState(new Date()); 
  const handleChange = (date) => { setStartDate(date); };
  const [timeSlot, setTimeSlot] = useState('');

  const timeSlots = [ '09:00 AM','10:00 AM', '11 AM', '1:00 PM', '2:00 PM', '3:00 PM' ];

  return (
    
    <Router> <div> <nav> <ul> <li>
    <Link to="/">Home</Link></li>
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/doctor-dashboard">Doctor Dashboard</Link></li>
    <li><Link to="/patient-dashboard">Patient Dashboard</Link></li>
    <li><Link to="/book-appointment">Book Appointment</Link></li>
</ul>
</nav>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/book-appointment" element={<BookAppointment />} /> BookAppointment
    </Routes>
</div>

</Router>
  );
}

export default App;
