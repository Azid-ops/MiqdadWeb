import React from 'react'
import { buttonHandlerDelete, buttonHandlerSignOut, buttonHandlerUpdate } from './Fucntions';
import { useNavigate } from 'react-router-dom';

export default function Home(props) {

  const navigate = useNavigate();
  return (
    <div className='border-cyan-600 border-2'>
      <h1>First Name: {props?.schemaFirstName}</h1>
      <h1>Last Name: {props?.schemaLastName}</h1>
      <p>Age: {props?.schemaAge}</p>
      <p>Gender: {props?.schemaGender}</p>
      <p>Profession: {props?.schemaProfession}</p>
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => buttonHandlerSignOut(navigate)}>Sign Out</button><br />
      <button onClick={() => buttonHandlerUpdate(navigate)}>Update</button><br />
      <button onClick={() => {
        console.log("Delete button was pressed");
        buttonHandlerDelete(buttonHandlerSignOut, navigate);
      }}>Delete Account</button><br />
    </div>
  )
}
