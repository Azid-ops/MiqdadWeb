import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { onChangeHandler } from './Fucntions';
import { onClickHandler } from './Fucntions'

export default function Update() {
    const navigate = useNavigate();
    const [data, setData] = useState('');

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                onClickHandler('update', 'PATCH', navigate, data);
            }}>

                <label htmlFor="FirstName">FirstName:</label><br />
                <input type="text" id="FirstName" name="FirstName" onChange={event => onChangeHandler(event, data, setData)} /><br />
                <label htmlFor="LastName">LastName:</label><br />
                <input type="text" id="LastName" name="LastName" onChange={event => onChangeHandler(event, data, setData)} /><br />
                <label htmlFor="Age">Age:</label><br />
                <input type="number" id="Age" name="Age" onChange={event => onChangeHandler(event, data, setData)} /><br />
                <p htmlFor="Gender">Gender:</p>
                <label htmlFor="Gender">Male: </label>
                <input type="radio" id="Male" name="Gender" onChange={event => onChangeHandler(event, data, setData)} />&nbsp;&nbsp;
                <label htmlFor="Gender">Female: </label>
                <input type="radio" id="Female" name="Gender" onChange={event => onChangeHandler(event, data, setData)} /><br />
                <label htmlFor="Profession">Profession:</label><br />
                <input type="Profession" id="Profession" name="Profession" onChange={event => onChangeHandler(event, data, setData)} /><br />
                <label htmlFor="sub"></label><br />
                <input type="Submit" id="Profession" name="sub" /><br />
            </form>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>{data.FirstName}</p>
            <p>{data.LastName}</p>
        </div>
    )
}
