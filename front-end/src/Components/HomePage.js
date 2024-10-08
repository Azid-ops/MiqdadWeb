import React, { useEffect, useState } from 'react'
import { buttonHandlerSignOut } from './Fucntions';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import Pendulum from './Loaders/Pendulum';

export default function HomePage() {

    const [data, setData] = useState('');
    const [wait, setWait] = useState(true);
    const navigate = useNavigate();

    async function fetchData() {


        if (!localStorage.getItem("userToken")) {
            navigate("/");
        }

        const response = await fetch('/home', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem("userToken")}`
            }
        });

        if (response.status === 401) {
            buttonHandlerSignOut();
        }
        else if (response.status === 403) {
            setData(undefined);
            setWait(false);
        }
        else if (response.status === 200) {
            let responseObject = await JSON.parse(await response.text());
            setData(responseObject);
            setWait(false);
        }
        else {
            console.error(response.text(), "Error");
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    if (wait)
        return (<Pendulum />)

    if (data === '' || data === undefined)
        navigate('/Details');

    else
        return (
            <Home
                schemaAge={data["schemaAge"]}
                schemaGender={data["schemaGender"]}
                schemaLastName={data["schemaLastName"]}
                schemaFirstName={data["schemaFirstName"]}
                schemaProfession={data["schemaProfession"]}
            />
        )
}
