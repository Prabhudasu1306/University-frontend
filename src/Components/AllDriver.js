import React, { useState, useEffect } from "react";
import axios from "axios";
import './AllDirver.css'
const AllDriver = () => {
  const [drives, setDrives] = useState([]);

  useEffect(() => {
    const fetchDrives = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/drives/all");
        setDrives(response.data);
      } catch (error) {
        console.error("There was an error fetching the drives:", error);
      }
    };
    fetchDrives();
  }, []);

  return (
    <div className="all-drivers-container">
      <h2 className="all-drivers-heading">Driver Details</h2>

      <table className="drivers-table">
        <thead>
          <tr>
            <th className="table-header">Name</th>
            <th className="table-header">Mobile Number</th>
            <th className="table-header">Salary</th>
            <th className="table-header">Experience (Years)</th>
            <th className="table-header">Bus Number</th>
            <th className="table-header">From Address</th>
            <th className="table-header">To Address</th>
          </tr>
        </thead>
        <tbody>
          {drives.length > 0 ? (
            drives.map((drive) => (
              <tr key={drive.id}>
                <td className="table-cell">{drive.name}</td>
                <td className="table-cell">{drive.mobileNumber}</td>
                <td className="table-cell">{drive.salary}</td>
                <td className="table-cell">{drive.experience}</td>
                <td className="table-cell">{drive.busNumber}</td>
                <td className="table-cell">{drive.fromAddress}</td>
                <td className="table-cell">{drive.toAddress}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="table-cell" colSpan="7">
                No driver details available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllDriver;
