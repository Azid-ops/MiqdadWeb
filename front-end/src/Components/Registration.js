import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiCall } from './Fucntions';


export default function Registration() {
    const navigate = useNavigate();

    const [pass, setPass] = useState(true);
    const [error, setError] = useState(false);
    const [userEmail, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [userPassword, setPassword] = useState("");

    useEffect(() => {
        if (localStorage.getItem("userToken"))
            navigate("/Home");
    }, [])

    return (
        <form onSubmit={e => {
            e.preventDefault();
            const data = {};
            data['userName'] = userEmail;
            data['userPassword'] = userPassword;
            data['userEmail'] = userEmail;
            apiCall(navigate, setError, data);
        }}>
            <input
                required
                value={userName}
                type="text"
                id='userName'
                className="form-control"
                onChange={e => { setUserName(e.target.value) }}
                placeholder='user name'
            />
            <br />
            <input
                required
                value={userEmail}
                aria-label="Name"
                className="form-control"
                type="email"
                id='email'
                onChange={e => { setEmail(e.target.value) }}
                placeholder='Email'
            />
            <br />
            <input
                required
                value={userPassword}
                typeof='password'
                aria-label="Name"
                className="form-control"
                type={pass ? "password" : "text"}
                id='password'
                onChange={e => { setPassword(e.target.value) }}
                placeholder='password'
            />
            <br />
            <input type='submit' className="btn btn-primary"></input>
            <br />
            <br />
            <div className='form-check'>
                <input className='form-check-input' type='checkbox' onChange={() => { setPass(!pass) }} />
                <label className='form-check-label'> Show Password</label>
            </div>
            {
                error ? "Something Went Wrong!" : null
            }
            <br />
            <br />
            <div className='text-center'>
                <Link to="/" >Already have an account? Click here to login</Link>
            </div>
        </form>
    )
}
