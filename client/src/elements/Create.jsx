import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Create() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        mobile: '',
        dob: ''
    });

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
    
        axios.post('http://localhost:5000/add_user', values)
            .then((res) => {
                navigate('/');
                console.log(res);
            })
            .catch((err) => console.log(err));
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div className='container' style={{ maxWidth: '600px' }}>
        <div className='border rounded shadow p-4 mt-5'>
            <div className='row'>
                <h3>Add Student</h3>
                <div className='d-flex justify-content-end'>
                    <Link to='/' className='btn btn-success'>Home</Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='form-group my-3'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' required onChange={handleChange} value={values.name} className='form-control' />
                    </div>
                    <div className='form-group my-3'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' required onChange={handleChange} value={values.email} className='form-control' />
                    </div>
                    <div className='form-group my-3'>
                        <label htmlFor='mobile'>Mobile Number</label>
                        <input type='tel' name='mobile' required onChange={handleChange} value={values.mobile} className='form-control' />
                    </div>
                    <div className='form-group my-3'>
                        <label htmlFor='dob'>Date of Birth</label>
                        <input type='date' name='dob' required onChange={handleChange} value={values.dob} className='form-control' />
                    </div>
                    <div className='form-group my-3'>
                        <button type='submit' className='btn btn-success'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}

export default Create;
