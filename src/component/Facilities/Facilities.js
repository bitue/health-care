import React from 'react';
import { NavLink } from 'react-router-dom';

const Facilities = () => {
    return (
        <div className='container mx-auto my-10'>
            <h1 className='font-bold text-3xl text-center'>Our speciality</h1>
            <div className='grid md:grid-cols-3 grid-cols-1'>
                <div className='bg-gray-200 p-2 m-2 rounded-2xl space-y-1'>
                    <h1 className='font-bold text-2xl '> Specialized Doctors</h1>
                    <div>
                        <img className='rounded-2xl' src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
                    </div>

                    <NavLink to='/home' activeClassName=' border-green-500 '>
                        <button className='px-3 py-1 font-semibold rounded-3xl border-2 bg-green-500'>Find Doctors</button>

                    </NavLink>
                </div>

                <div className='bg-gray-200 p-2 m-2 rounded-2xl space-y-1'>
                    <h1 className='font-bold text-2xl '>24/7 Emergency Support</h1>
                    <div>
                        <img className='rounded-2xl' src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    </div>

                    <NavLink to='/home' activeClassName=' border-green-500  '>
                        <button className='px-3 py-1 font-semibold rounded-3xl border-2 bg-red-500'>Emergency</button>

                    </NavLink>
                </div>

                <div className='bg-gray-200 p-2 m-2 rounded-2xl space-y-1'>
                    <h1 className='font-bold text-2xl '>Special ICU CCU</h1>
                    <div>
                        <img className='rounded-2xl' src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80" alt="" />
                    </div>

                    <NavLink to='/home' activeClassName=' border-green-500  '>
                        <button className='px-3 py-1 font-semibold rounded-3xl border-2 bg-green-500 '>Special Support </button>

                    </NavLink>
                </div>
            </div>

        </div>
    );
};

export default Facilities;