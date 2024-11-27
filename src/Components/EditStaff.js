import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './EditStaff.css'; 

const EditStaff = () => {
  const [staff, setStaff] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    department: '',
    designation: '',
    dateOfJoining: '',
    highestQualification: '',
    experience: '',
    salary: ''
  });
  
  const { id } = useParams(); 
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/teaching-staff/${id}`)
      .then(response => {
        setStaff(response.data); 
      })
      .catch(error => {
        console.error("Error fetching staff data!", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaff({ ...staff, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/teaching-staff/${id}`, staff)
      .then(response => {
        alert('Staff updated successfully');
        navigate('/allStaff'); 
      })
      .catch(error => {
        console.error("Error updating staff data!", error);
        alert('Error updating staff');
      });
  };

  const handleCancel = () => {

    setStaff({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      department: '',
      designation: '',
      dateOfJoining: '',
      highestQualification: '',
      experience: '',
      salary: ''
    });
    navigate('/allStaff');
  };

  return (
    <div className="edit-staff-container">
      <h2 className="edit-staff-heading">Edit Teaching Staff</h2>
      <form onSubmit={handleSubmit}>
        <div className="edit-staff-grid">
          <div className="edit-staff-form-group">
            <label className="edit-staff-label">First Name:</label>
            <input
              type="text"
              name="firstName"
              className="edit-staff-input"
              value={staff.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="edit-staff-form-group">
            <label className="edit-staff-label">Last Name:</label>
            <input
              type="text"
              name="lastName"
              className="edit-staff-input"
              value={staff.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="edit-staff-form-group">
            <label className="edit-staff-label">Email:</label>
            <input
              type="email"
              name="email"
              className="edit-staff-input"
              value={staff.email}
              onChange={handleChange}
            />
          </div>

          <div className="edit-staff-form-group">
            <label className="edit-staff-label">Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              className="edit-staff-input"
              value={staff.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="edit-staff-form-group">
            <label className="edit-staff-label">Department:</label>
            <input
              type="text"
              name="department"
              className="edit-staff-input"
              value={staff.department}
              onChange={handleChange}
            />
          </div>
          <div className="edit-staff-form-group">
            <label className="edit-staff-label">Designation:</label>
            <input
              type="text"
              name="designation"
              className="edit-staff-input"
              value={staff.designation}
              onChange={handleChange}
            />
          </div>

          <div className="edit-staff-form-group">
            <label className="edit-staff-label">Date of Joining:</label>
            <input
              type="date"
              name="dateOfJoining"
              className="edit-staff-input"
              value={staff.dateOfJoining}
              onChange={handleChange}
            />
          </div>
          <div className="edit-staff-form-group">
            <label className="edit-staff-label">Highest Qualification:</label>
            <input
              type="text"
              name="highestQualification"
              className="edit-staff-input"
              value={staff.highestQualification}
              onChange={handleChange}
            />
          </div>
          <div className="edit-staff-form-group">
            <label className="edit-staff-label">Experience:</label>
            <input
              type="text"
              name="experience"
              className="edit-staff-input"
              value={staff.experience}
              onChange={handleChange}
            />
          </div>
          <div className="edit-staff-form-group">
            <label className="edit-staff-label">Salary:</label>
            <input
              type="text"
              name="salary"
              className="edit-staff-input"
              value={staff.salary}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="edit-staff-buttons">
          <button type="submit" className="edit-staff-button">Save Changes</button>
          <button type="button" className="edit-staff-clear-button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EditStaff;
