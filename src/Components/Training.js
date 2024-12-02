import React from 'react';
import Training3 from './Training3.jpg'; 
import Training1 from './Training1.jpg'; 
import Training2 from './Training2.jpg';  
import Carrer from './Carrer.jpg';  
import './Training.css'; // Import the new CSS file

const Training = () => {
  return (
    <div className="training-container">
      <section className="training-section">
        <h2>Training Overview</h2>
        <img src={Training3} alt="Training Profile" />
        <p>Placement training is provided at various academic stages...</p>
      </section>

      <section className="training-section">
        <h2>Training Process</h2>
        <img src={Training1} alt="Training Modules" />
        <p>The training focuses on equipping students with the necessary skills...</p>
      </section>

      <section className="training-section">
        <h2>Training Outcomes</h2>
        <img src={Training2} alt="Training Outcomes" />
        <p>The training outcomes help students:</p>
        <ul className="training-outcome-list">
          <li><strong>Determine</strong> their strengths...</li>
          <li><strong>Develop</strong> through internships...</li>
          <li><strong>Depict</strong> themselves professionally...</li>
        </ul>
      </section>

      <section className="training-section">
        <h2>Career Development</h2>
        <img src={Carrer} alt="Career Development" />
        <p>This program introduces students to prospective employers...</p>
      </section>
    </div>
  );
};

export default Training;
