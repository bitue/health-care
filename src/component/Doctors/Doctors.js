import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Doctors = () => {

    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=40')
            .then(res => res.json())
            .then(data => setDoctors(data.results))
    }, [])

    const history = useHistory()

    return (
        <div>
            <h1 className='font-bold text-3xl text-green-500 text-center my-5'>See our Doctors </h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 container mx-auto '>
                {
                    doctors.map(doctor => <div className='text-center bg-gray-200 m-2 py-2 px-1 rounded-2xl'>
                        <div className='flex justify-center'>
                            <img src={doctor.picture.large} className='rounded-full' alt="" />
                        </div>
                        <div>
                            <h2>{doctor.name.title} {doctor.name.first} {doctor.name.last}</h2>
                            <p>{doctor.email}</p>
                            <p>MBBS in UK</p>
                            {/* <NavLink to={`confirm/${doctor.name.first}`} activeClassName=' border-green-500 text-green-500 '>
                                <button className='px-3 py-1 font-semibold rounded-3xl border-2 '>Confirm appointment</button>

                            </NavLink> */}
                        </div>
                    </div>)
                }
            </div>

            <div className='text-center'>


                <button className='font-bold text-green-500' onClick={() => history.push('/appointment')} >Make Appointment<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg></button>

            </div>

        </div>
    );
};

export default Doctors;