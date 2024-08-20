import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loginApiCall } from './Fucntions';

export default function Login() {

    const myProp = useLocation().state;

    const navigate = useNavigate();
    const [pass, setPass] = useState(true);
    const [error, setError] = useState(false);
    const [userPassword, setuserPassword] = useState("");
    const [userEmail, setuserEmail] = useState(myProp === undefined && myProp?.email ? "" : myProp?.email);

    useEffect(() => {
        console.log("Here in login");
        if (localStorage.getItem("userToken"))
            navigate("/Home");
    }, []);

    return (
        <form onSubmit={e => {
            e.preventDefault();
            const data = {};
            data['userPassword'] = userPassword;
            data['userEmail'] = userEmail;
            loginApiCall(setError, setuserEmail, navigate, setuserPassword, data);
        }}

        >
            <input
                required
                value={userEmail}
                type="email"
                id='userEmail'
                className="form-control"
                onChange={e => { setuserEmail(e.target.value) }}
                placeholder='user name'
            />
            <br />
            <input
                required
                value={userPassword}
                typeof='userPassword'
                aria-label="Name"
                className="form-control"
                type={pass ? "password" : "text"}
                id='userPassword'
                onChange={e => { setuserPassword(e.target.value) }}
                placeholder='userPassword'
            />
            <br />
            <input type='submit' className="btn btn-primary" />
            <br />
            <br />
            <div className='form-check'>
                <input type='checkbox' className='form-check-input' onChange={() => { setPass(!pass) }} />
                <label className="form-check-label" htmlFor='form-check-input'> Show Password</label>
            </div>
            <br />
            {
                error ? "Something Went Wrong!" : null
            }
            <br />
            <div className='text-center'>
                <Link to="/Registration">Don't have an account? click here to signup</Link>
            </div>
        </form>
    )
}

