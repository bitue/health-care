import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Confirm = () => {
    const { doctorName } = useParams()
    const {user} = useContext(AuthContext)
    return (
        <div>
           

            <div className='w-11/12 mx-auto text-center mt-10'>
                <div>
                    <h1 className='font-bold text-green-500 text-3xl text-center '>Appointment Now</h1>
                    <div className='space-y-2'>
                        <p className='font-semibold '>Doctor Name</p>
                        <p><input className='bg-gray-200 rounded-2xl w-1/2 py-1 px-3' type="text" value={`Doctor ${doctorName}`}  /></p>
                        <p className='font-semibold '>Patient Email</p>
                        <p><input className='bg-gray-200 rounded-2xl w-1/2 py-1 px-3' value={user.email}  type="text" /></p>

                        <NavLink to='/success' activeClassName=' border-green-500 text-green-500 '>
                                <button className='px-3 py-1 font-semibold rounded-3xl border-2 my-2 '>Confirm Appointment</button>

                            </NavLink>


                    </div>
                </div>

            </div>

        </div>
          
    );

}

export default Confirm;