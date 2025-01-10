

import './BookAppointmnetLayout.css';
import './table.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';


function BookAppointment() {

  const [selectedOption, setSelectedOption] = useState(''); 
  const handleSelectChange = (e) => { setSelectedOption(e.target.value); };

  const [startDate, setStartDate] = useState(new Date()); 
  const handleChange = (date) => { setStartDate(date); };
  const [timeSlot, setTimeSlot] = useState('');

  const timeSlots = [ '09:00 AM','10:00 AM', '11 AM', '1:00 PM', '2:00 PM', '3:00 PM' ];

  return (
    
    <div>
       <h1>Book an Appointment</h1>
       <div className="container">
      <div className="column left">
        <p>Select Doctor</p>
        <p>
        <select value={selectedOption} onChange={handleSelectChange} 
        style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}> 
          <option value="">Choose a Doctor</option> 
          <option value="doctorID1">Doctor 1</option> 
          <option value="doctorID2">Doctor 2</option>
          <option value="doctorID3">Doctor 3</option> 
        </select>
        </p>
        <p>Select Date</p>
        <p>
          <DatePicker selected={startDate} onChange={handleChange} 
          dateFormat="yyyy/MM/dd" className="form-control" />
        </p>
        
      </div> 
      <div className="column right"> 
        
      <p>Time Slot:</p> 
      <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} required 
      style={{  }} >
         <option value="">Please choose a time</option>
          {timeSlots.map((slot, index) => ( <option key={index} value={slot}>{slot}</option> ))}
      </select>
      <p>Reason for Visit</p>
      <textarea>

      </textarea>
      <p>Additional Notes ( Optional )</p>
      <p><input type="text" /></p>

      <p><input type="submit" value="Confirm Booking" /></p>
         
      </div> 
      </div>
      </div>
  );
}

export default BookAppointment;
