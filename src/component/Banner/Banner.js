import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className='bg-gray-200 grid md:grid-cols-2 grid-cols-1 container mx-auto rounded-3xl p-5 my-5'>
                <div>
                    <img className='' src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80" alt="" />
                </div>
                <div className='px-5 md:mt-10'>
                    <h1 className='font-bold text-3xl text-green-500'> HEALTH CARE</h1>
                    <p className=''>
                        GET A WORLD CLASS HEALTH SERVICE
                        HC has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality. The hospital is a showcase of synergy of medical technology and advances in ICT Division through paperless medical records. The skilled nurses, technologists and administrators of Bangladesh Specialized Hospital, aided by state-of-the-art equipments, provide a congenial infrastructure for the medical professionals in providing healthcare of international standards.
                    </p>
                    <NavLink to='/about' activeClassName=' border-green-500 text-green-500 '>
                                <button className='px-3 py-1 font-semibold rounded-3xl border-2 bg-green-500 '>About Health Care</button>

                            </NavLink>


                </div>



            </div>

        </div>
    );
};

export default Banner;