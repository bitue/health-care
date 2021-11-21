import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';




const Details = () => {
    const { id } = useParams()
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=10')
            .then(res => res.json())
            .then(data => setDoctors(data.results))
    }, [])


    const data = useFetch()
    const selected = data.find(ele => ele.key == id)




    return (
        <>
            <div className=''>
                {
                    selected?.key && <div >
                        <div className='w-11/12 mx-auto'>
                            <h1 className='text-3xl font-bold text-green-500 text-center my-10'>{selected.title}</h1>
                            <div className='grid grid-cols-2 space-x-10'>
                                <div>
                                    <img src={selected.photo} className='rounded-3xl ' alt="" />
                                </div>
                                <div className='items-center'>
                                    <h2 className='font-bold text-3xl text-center text-green-500'>Description</h2>
                                    <h2 className='text-green-500 my-20'>{selected.description}</h2>

                                   
                                </div>



                            </div>

                        </div>
                        <div>
                            <h1 className='text-3xl font-bold text-green-500 text-center my-10'>{selected.title} Doctors List</h1>
                            <div>
                                <div className='grid grid-cols-4 container mx-auto '>
                                    {
                                        doctors.map(doctor => <div className='text-center bg-gray-200 m-2 py-2 px-1 rounded-2xl'>
                                            <div className='flex justify-center'>
                                                <img src={doctor.picture.large} className='rounded-full' alt="" />
                                            </div>
                                            <div>
                                                <h2>{doctor.name.title} {doctor.name.first} {doctor.name.last}</h2>
                                                <p>{doctor.email}</p>
                                                <p className='font-bold text-green-500 '>MBBS in {selected.title}</p>
                                                <NavLink to={`/confirm/${doctor.name.first}`} activeClassName=' border-green-500 text-green-500 '>
                                                    <button className='px-3 py-1 font-semibold rounded-3xl border-2 '>Confirm appointment</button>

                                                </NavLink>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>

                        </div>

                    </div>
                }


            </div>

        </>

    );
};

export default Details;