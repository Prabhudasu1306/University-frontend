import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'; 

import About from './About';  
import SignUp from './SignUp';
import Login from './Login';
import './NavbarCom.css';
import Staff from './Staff';
import AllStaff from './AllStaff';
import EditStaff from './EditStaff';

const NavbarCom = () => {
 
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
   
      <Navbar className="custom-navbar" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/signup" className="signup-link">SignUp</Nav.Link>
              <Nav.Link as={Link} to="/login" className="login-link">Login</Nav.Link>
            </Nav>
            <Nav className="ms-auto social-links">
              <Nav.Link onClick={() => openLink('https://www.facebook.com')}>
                <FaFacebook size={30} />
              </Nav.Link>
              <Nav.Link onClick={() => openLink('https://www.instagram.com')}>
                <FaInstagram size={30} />
              </Nav.Link>
              <Nav.Link onClick={() => openLink('https://www.youtube.com')}>
                <FaYoutube size={30} />
              </Nav.Link>
              <Nav.Link onClick={() => openLink('https://twitter.com')}>
                <FaTwitter size={30} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

     
      <Navbar className="second-navbar" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/about" className="about-link">About</Nav.Link>
              <Nav.Link as={Link} to="/staff" className="staff-link">Staff</Nav.Link>
              <Nav.Link as={Link} to="/Allstaff" className="Allstaff-link">AllStaff</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      <div className="content-area">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/allstaff" element={<AllStaff />} />
          <Route path="/edit-staff/:id" element={<EditStaff />} /> 


          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
         
        </Routes>
      </div>
    </div>
  );
};

export default NavbarCom;
