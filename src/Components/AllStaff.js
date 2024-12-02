import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './AllStaff.css';

const AllStaff = () => {
  const [staffData, setStaffData] = useState([]);
  const [filteredStaff, setFilteredStaff] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    axios.get('http://localhost:8080/api/teaching-staff/all')
      .then(response => {
        setStaffData(response.data);
        setFilteredStaff(response.data); // Initially show all staff
      })
      .catch(error => {
        console.error("There was an error fetching the staff data!", error);
      });
  }, []);

  // Filter staff based on department
  const handleDepartmentChange = (department) => {
    if (department === '') {
      setFilteredStaff(staffData); // Show all staff when no department is selected
    } else {
      const filtered = staffData.filter(staff => staff.department === department);
      setFilteredStaff(filtered);
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/teaching-staff/${id}`)
      .then(() => {
        setStaffData(staffData.filter(staff => staff.id !== id));
        setFilteredStaff(filteredStaff.filter(staff => staff.id !== id));
        alert('Staff deleted successfully');
      })
      .catch(error => {
        console.error("There was an error deleting the staff!", error);
        alert('Error deleting staff');
      });
  };

  const handleEdit = (id) => {
    navigate(`/edit-staff/${id}`);
  };

  return (
    <div className="all-staff-container">
      <h2 className="all-staff-title">Staff Directory</h2>

      {/* Department Filter */}
      <div className="department-filter">
        <button onClick={() => handleDepartmentChange('CSE')}>CSE</button>
        <button onClick={() => handleDepartmentChange('Mechanical')}>Mechanical</button>
        <button onClick={() => handleDepartmentChange('ECE')}>ECE</button>
        <button onClick={() => handleDepartmentChange('EEE')}>EEE</button>
        <button onClick={() => handleDepartmentChange('Civil')}>Civil</button>
        <button onClick={() => handleDepartmentChange('')}>All</button> {/* Reset to all staff */}
      </div>

      <table className="all-staff-table">
        <thead>
          <tr>
            <th>SNO</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Department</th>
            <th>Specialization</th>
            <th>Designation</th>
            <th>Date of Joining</th>
            <th>Highest Qualification</th>
            <th>Experience</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStaff.map((staff, index) => (
            <tr key={staff.id}>
              <td>{index + 1}</td>
              <td>{staff.firstName}</td>
              <td>{staff.lastName}</td>
              <td>{staff.email}</td>
              <td>{staff.phoneNumber}</td>
              <td>{staff.department}</td>
              <td>{staff.specialization}</td>
              <td>{staff.designation}</td>
              <td>{staff.dateOfJoining}</td>
              <td>{staff.highestQualification}</td>
              <td>{staff.experience}</td>
              <td>{staff.salary}</td>
              <td>
                <button className="edit-button" onClick={() => handleEdit(staff.id)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(staff.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllStaff;
