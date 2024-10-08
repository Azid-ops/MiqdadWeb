import React from 'react'
import '../Loaders/Loader.css'

export default function Loader() {
    return (
        <div className='center'>
            <div className="loader">
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__ball"></div>
            </div>
        </div>
    )
}
