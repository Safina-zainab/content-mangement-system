import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/get_student/${id}`)
      .then((res) => {
        const formattedData = res.data.map((student) => {
          const date = new Date(student.dob);
          const formattedDate = `${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}`;
          return { ...student, dob: formattedDate };
        });
        setData(formattedData);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return (
    <div className="container" style={{ maxWidth: '600px', marginTop: '20px' }}>
      <div className="border rounded shadow p-4">
        <h1> Student Details
        <Link to="/" className="btn btn-success" style={{marginLeft: '33%' }}>Back</Link>
        </h1>
        {data.map((student) => (
          <ul key={student.id} className="list-group">
            <li className="list-group-item">
              <b>ID: </b>
              {student.id}
            </li>
            <li className="list-group-item">
              <b>Name: </b>
              {student.name}
            </li>
            <li className="list-group-item">
              <b>Email: </b>
              {student.email}
            </li>
            <li className="list-group-item">
              <b>Mobile: </b>
              {student.mobile}
            </li>
            <li className="list-group-item">
              <b>Date of Birth: </b>
              {student.dob}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Read;
