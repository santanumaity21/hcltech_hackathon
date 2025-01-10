

import './TwoColumnLayout.css';
import './table.css';
import React, { useState } from 'react';



function DoctorDashboard() {



  const appointments = [
    {time: '9:00 AM', patient_name: 'John Doe',reason: 'Annual Check Up'},
    {time: '10:30 AM', patient_name: 'Jane Smith',reason: 'Follow Up'}
  ];

  const recent_patients = [
    {last_visit: '2023-06-01', patient_name: 'John Doe'},
    {last_visit: '2023-05-26', patient_name: 'Jane Smith'}
  ];

  return (
    <div className="container">
      <div className="column left">
        <h2>Bayer Health</h2>
        <nav className="vertical-menu"> 
          <ul> 
            <li><a href="#home">Dashboard</a></li> 
            <li><a href="#patient-list">Patient List</a></li> 
            <li><a href="#appointmnets">Appointments</a></li> 
            <li><a href="#message">Message</a></li> 
            <li><a href="#logout">Logout</a></li> 
            </ul> 
          </nav>
      </div> 
      <div className="column right"> 
        <h2>Welcome, Dr. Smith</h2> 
        <div>
            <h3>
              Today's Appointments
            </h3>
        </div>
        <div class="todays_appoitments">
          <table className="table-container">
            <thead>
               <th>Time</th>
               <th>Patient Name</th>
               <th>Reason</th>
            </thead>
            <tbody>
            {appointments.map((appointment, index) => ( 
          <tr key={index}>
            
           <td>{appointment.time}</td>
           <td>{appointment.patient_name}</td>
           <td>{ appointment.reason}</td>   
          
          </tr> ))}

            </tbody>
          </table>
        </div>

        <div class="recent_patients" style={{margin: '25px'}}>
        <h3>
              Recent Patients
            </h3>
          <table className="table-container">
            <thead>
               <th>Name</th>
               <th>Last Visit</th>
               <th>Action</th>
            </thead>
            <tbody>
            {recent_patients.map((recent_patient, index) => ( 
          <tr key={index}>
            
           <td>{recent_patient.patient_name}</td>
           <td>{recent_patient.last_visit}</td>
           <td>View Profile</td>   
          
          </tr> ))}

            </tbody>
          </table>
        </div>
         
      </div> 
      </div>
  );
}

export default DoctorDashboard;
