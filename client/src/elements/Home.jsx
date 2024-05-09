import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [data, setData] = useState([])
  const [deleted, setDeleted] = useState(true)
  
  useEffect(() => {
    if (deleted) {
      setDeleted(false)
      axios.get('http://localhost:5000/students')
        .then((res) => {
          // Map over the received data and format the date
          const formattedData = res.data.map(student => {
            const date = new Date(student.dob);
            const formattedDate = `${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}`;
            return { ...student, dob: formattedDate };
          });
          setData(formattedData);
        })
        .catch((err) => console.log(err))
    }
  }, [deleted])

  function handleDelete(id) {
    axios.delete(`/http://localhost:5000/delete/${id}`)
      .then((res) => {
        setDeleted(true)
      })
      .catch((err) => console.log(err))
  }

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <div className='container' style={{ maxWidth: '900px', marginTop: '20px', border: '1px solid #ccc', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', padding: '20px', borderRadius: '10px' }}>
      <h3>Students</h3>
      <div className='d-flex justify-content-end'>
        <Link className='btn btn-success' to='/create'>Add Student</Link>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.mobile}</td>
              <td>{student.dob}</td>
              <td>
                <Link className='btn mx-2 btn-success' to={`/read/${student.id}`}>Read</Link>
                <Link className='btn mx-2 btn-success' to={`/edit/${student.id}`}>Edit</Link>
                <button onClick={() => handleDelete(student.id)} className='btn mx-2 btn-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home
