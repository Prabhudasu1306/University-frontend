import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

import About from './About';
import SignUp from './SignUp';
import Login from './Login';
import './NavbarCom.css';
import Staff from './Staff';
import AllStaff from './AllStaff';
import EditStaff from './EditStaff';
import CoursesOffered from './CoursesOffered';
import Schools from './Schools';
import Library from './Library';
import Feedback from './Feedback';
import Undergraduate from './Undergraduate';
import PostGraduate from './PostGraduate';

import Training from './Training';
import Internships from './Internships';
import Certifications from './Certifications';
import ContactUs from './ContactUs';
import CoreValues from './CoreValues';  
import Overview from './Overview';
import FounderChancellor from './FounderChancellor';
import Chancellor from './Chancellor';
import Vision from './Vision';
import NonTeaching from './NonTeaching';
import AddCourse from './AddCourse';
import AllNonTeaching from './AllNonTeching'
import Eligible from './Eligible';
import Driver from './Driver';
import AllDriver from './AllDriver';
import PlacedStudents from './PlacedStudents';

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
              <Nav.Link as={Link} to="/driver" className="driver-link">Driver</Nav.Link>
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
              <Nav.Link as={Link} to="/nonteaching" className="nonteaching-link">NonTeaching</Nav.Link>
              <Nav.Link as={Link} to="/addcourse" className="addcourse-link">AddCourse</Nav.Link>

              <NavDropdown title="Institution Info" id="institution-info-dropdown">
                <NavDropdown.Item as={Link} to="/core-values">Core Values</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/overview">Overview</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/founder-chancellor">Founder Chancellor</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/chancellor">Chancellor</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/vision">Vision </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Academics" id="academics-dropdown">
                <NavDropdown.Item as={Link} to="/courses-offered">Courses Offered</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/schools">Colleges</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/library">Library</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/feedback">Feedback</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Admission" id="admission-dropdown">
                <NavDropdown.Item as={Link} to="/undergraduate">Undergraduate</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Staff" id="staff-dropdown">
                <NavDropdown.Item as={Link} to="/allstaff">Faculty</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/allnonteaching">NonTeaching</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/alldriver">AllDrivers</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Placement" id="placement-dropdown">
                <NavDropdown.Item as={Link} to="/placedstudents">MyPlacements</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/training">Training</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/internships">Internships</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/certifications">Certifications</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contactus">ContactUs</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="content-area">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/placedstudents" element={<PlacedStudents/>}/>
          <Route path="/staff/:department" element={<AllStaff />} />
          <Route path="/allstaff" element={<AllStaff />} />
          <Route path="/edit-staff/:id" element={<EditStaff />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses-offered" element={<CoursesOffered />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/library" element={<Library />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/undergraduate" element={<Undergraduate />} />
          <Route path="/postgraduate" element={<PostGraduate />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/training" element={<Training />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/core-values" element={<CoreValues />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/founder-chancellor" element={<FounderChancellor />} />
          <Route path="/chancellor" element={<Chancellor />} />
          <Route path="/vision-" element={<Vision />} />
          <Route path="/nonteaching" element={<NonTeaching />} />
          <Route path="/allnonteaching" element={<AllNonTeaching />} />
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/eligible" element={<Eligible />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/alldriver" element={<AllDriver />} />
          {/*  */}
        </Routes>
      </div>
    </div>
  );
};

export default NavbarCom;
