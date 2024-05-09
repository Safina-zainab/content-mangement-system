import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Edit() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/get_student/${id}`)
      .then((res) => {
        const formattedData = res.data.map(student => {
          // Parse date and format it
          const date = new Date(student.dob);
          const formattedDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
          return { ...student, dob: formattedDate };
        });
        setData(formattedData);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(`http://localhost:5000/edit_user/${id}`, data[0])
      .then((res) => {
        navigate("/");
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container-fluid mt-4" style={{ maxWidth: "600px" }}>
      <div className="border rounded shadow p-4">
        <h1>Update Student
        <Link to="/" className="btn btn-success"  style={{ marginLeft: "30%" }}>
          Back
        </Link>
        </h1>
        {data.map((student) => (
          <form key={student.id} onSubmit={handleSubmit}>
            <div className="form-group my-3">
              <label htmlFor="name">Name</label>
              <input
                value={student.name}
                type="text"
                name="name"
                required
                onChange={(e) =>
                  setData([{ ...data[0], name: e.target.value }])
                }
                className="form-control"
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="email">Email</label>
              <input
                value={student.email}
                type="email"
                name="email"
                required
                onChange={(e) =>
                  setData([{ ...data[0], email: e.target.value }])
                }
                className="form-control"
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="gender">Mobile</label>
              <input
                value={student.mobile}
                type="number"
                name="mobile"
                required
                onChange={(e) =>
                  setData([{ ...data[0], mobile: e.target.value }])
                }
                className="form-control"
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="dob">Date of Birth</label>
              <input
                value={student.dob}
                type="date"
                name="dob"
                required
                onChange={(e) => setData([{ ...data[0], dob: e.target.value }])}
                className="form-control"
              />
            </div>
            <div className="form-group my-3">
              <button type="submit" className="btn btn-success">
                Save
              </button>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
}

export default Edit;
