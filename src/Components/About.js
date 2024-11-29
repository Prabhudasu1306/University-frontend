import React from 'react';
import Profile from './Profile.jpg'; 

const About = () => {
  return (
    <div>
      <h4>This is the About component</h4>
      <img src={Profile} alt="University Profile" />
    </div>
  );
};

export default About;

