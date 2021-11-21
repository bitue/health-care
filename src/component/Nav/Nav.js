import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Nav = () => {
    const { user, error, signOutFromGoogle } = useContext(AuthContext)


    return (
        <div>
            <nav className='bg-gray-100 py-1 grid md:grid-cols-4 grid-cols-1  '>
                <div className="logo ">
                    <h1 className='font-bold md:text-left md:px-5 text-center md:text-3xl text-2xl text-green-500 '>
                        <NavLink to='/home'>Health Care</NavLink>
                    </h1>
                </div>
                <div className='rest flex justify-around items-center  md:space-x-3 md:col-span-3 '>
                    <div className="links md:space-x-5 space-x-2 ">
                        <NavLink activeClassName='underline text-green-600 ' to='/appointment'>Appointment</NavLink>
                        <NavLink activeClassName='underline text-green-600 ' to='/about'>About</NavLink>

                        <NavLink activeClassName='underline text-green-600 ' to='/doctor'>Doctors</NavLink>

                    </div>
                    <div>
                        {
                            user.email ?
                                <div>
                                    <div className='flex justify-center items-center space-x-2'>
                                        <small>{user.displayName || user.email}</small>
                                     
                                        <button className='px-3 py-1 font-semibold rounded-3xl border-2 ' onClick={signOutFromGoogle}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg></button>


                                    </div>

                                </div>
                                :
                                <div className="btn-group space-x-2 ">

                                    <NavLink to='/signin' activeClassName=' border-green-500 text-green-500 '>
                                        <button className='px-3 py-1 font-semibold rounded-3xl border-2 '>Sign in</button>

                                    </NavLink>

                              


                                </div>
                        }

                    </div>




                </div>
            </nav>
        </div>
    );
};

export default Nav;