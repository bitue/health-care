import React from 'react';
import { NavLink } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Servise = () => {
    const data = useFetch()
    return (
        <>
            <h1 className='font-bold text-green-500 text-3xl text-center my-2'>Our Services</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 container mx-auto '>

                {
                    data?.map(service => {
                        return (
                            <div className='m-3 p-5 bg-gray-200 rounded-xl'>
                                <div>
                                    <img className='rounded-2xl' src={service.photo} alt="" />
                                </div>
                                <div>
                                    <h2 className='font-bold text-2xl'>{service.title}</h2>
                                    <p>{service.description}</p>
                                </div>
                                <NavLink to={`/details/${service.key}`} activeClassName=' border-green-500 text-green-500 '>
                                    <button className='px-3 py-1 font-semibold rounded-3xl border-2 '>View Details</button>

                                </NavLink>
                            </div>
                        )
                    })
                }
            </div>

        </>
    );
};

export default Servise;