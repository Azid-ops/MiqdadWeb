import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { onChangeHandler } from './Fucntions';
import { onClickHandler } from './Fucntions'

export default function Update() {
    const navigate = useNavigate();
    const [data, setData] = useState('');

    return (
        <div>
      <form
        className=""
        onSubmit={(e) => {
          e.preventDefault();
          onClickHandler('update', 'PATCH', navigate, data);
        }}
      >
        <div className="input-group mb-3">
          <lable className="input-group-text" htmlFor="FirstName">
            FirstName and LastName:
          </lable>
          <input
            className="form-control"
            type="text"
            id="first-name"
            name="FirstName"
            onChange={(event) => onChangeHandler(event, data, setData)}
          />
          <input
            className="form-control"
            type="text"
            id="last-name"
            name="LastName"
            onChange={(event) => onChangeHandler(event, data, setData)}
          />
        </div>
        <br />
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="Age">
            Age:
          </label>
          <input
            className="form-control"
            type="number"
            id="user-age"
            name="Age"
            onChange={(event) => onChangeHandler(event, data, setData)}
          />
        </div>
        <br />
        <div className="form-check">
          <label className="form-check-label" htmlFor="Gender">
            Male
          </label>
          <input
            className="form-check-input"
            type="radio"
            id="Male"
            name="Gender"
            onChange={(event) => onChangeHandler(event, data, setData)}
          />
        </div>
        &nbsp;&nbsp;
        <div className="form-check">
          <label className="form-check-lable" htmlFor="Gender">
            Female:{" "}
          </label>
          <input
            className="form-check-input"
            type="radio"
            id="Female"
            name="Gender"
            onChange={(event) => onChangeHandler(event, data, setData)}
          />
        </div>
        <br />
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="Profession">
            Profession:
          </label>
          <br />
          <input
            className="form-control"
            type="Profession"
            id="user-profession"
            name="Profession"
            onChange={(event) => onChangeHandler(event, data, setData)}
          />
        </div>
        <br />
        <label htmlFor="sub"></label>
        <br />
        <input
          className="btn btn-success"
          type="Submit"
          id="submit-data"
          name="sub"
        />
        <br />
      </form>
    </div>
    )
}
