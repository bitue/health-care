import React from 'react';

const Success = () => {
    return (
        <div className='md:my-20 my-10 flex-col text-center justify-center items-center'>
            <h1 className='font-bold text-green-500 text-3xl' >Your Appointment is Successful ...</h1>
            <div className='flex justify-center items-center'>
                <img src="https://c.tenor.com/6XJ9bKiuUUIAAAAM/ok-guy.gif" alt="" />
            </div>

            <h2 className='font-bold '>please let us we will contact with you for further details</h2>
        </div>
    );
};

export default Success;