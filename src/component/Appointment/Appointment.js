import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Appointment = () => {
    const [doctors , setDoctors] = useState([])
    useEffect(()=> {
        fetch('https://randomuser.me/api/?results=12')
        .then(res=> res.json())
        .then(data => setDoctors(data.results))
    },[])
    return (
        <div>
            <h2 className='text-center font-bold text-3xl my-5'>Make your  appointment Now </h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 container mx-auto '>
                {
                    doctors.map(doctor=> <div className='text-center bg-gray-200 m-2 py-2 px-1 rounded-2xl'>
                        <div className='flex justify-center'>
                            <img src={doctor.picture.large} className='rounded-full' alt="" />
                        </div>
                        <div>
                            <h2>{doctor.name.title} {doctor.name.first} {doctor.name.last}</h2>
                            <p>{doctor.email}</p>
                            <p>MBBS in UK</p>
                            <NavLink to={`confirm/${doctor.name.first}`} activeClassName=' border-green-500 text-green-500 '>
                                <button className='px-3 py-1 font-semibold rounded-3xl border-2 '>Confirm appointment</button>

                            </NavLink>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Appointment;