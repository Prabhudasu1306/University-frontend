import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './AllStaff.css';

const AllStaff = () => {
  const [staffData, setStaffData] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    axios.get('http://localhost:8080/api/teaching-staff/all')
      .then(response => {
        setStaffData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the staff data!", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/api/teaching-staff/${id}`)
      .then(() => {
        setStaffData(staffData.filter(staff => staff.id !== id));
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
    <div>
      <h2>All Teaching Staff</h2>
      <table>
        <thead>
          <tr>
            <th>SNO</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Date of Joining</th>
            <th>Highest Qualification</th>
            <th>Experience</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {staffData.map((staff, index) => (
            <tr key={staff.id}>
              <td>{index + 1}</td> 
              <td>{staff.firstName}</td>
              <td>{staff.lastName}</td>
              <td>{staff.email}</td>
              <td>{staff.phoneNumber}</td>
              <td>{staff.department}</td>
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
