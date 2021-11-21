import React from 'react';

const Mission = () => {
    return (
        <>
            <h1 className='font-bold text-2xl text-center my-5 container mx-auto'>Our Mission and Vision</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 container mx-auto md:space-x-2 '>
                <div className='p-2 bg-gray-200 rounded-2xl p-5'>
                    <h1 className='font-bold text-green-500 text-3xl'>MISSION</h1>
                    <h2 className='font-semibold text-1xl'>WE ARE DEDICATED TO MEETING THE NEEDS OF:
                    </h2>
                    <p> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline text-green-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>Our patient - excellent and cost-effective healthcare</p>

                    <p> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline text-green-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>Our staff - continuing development and welfare</p>

                    <p> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline text-green-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>Our nation - partnership in promoting health in Bangladesh.</p>
                </div>
                <div className='border-l-2 border-green-600 bg-green-300 rounded-2xl p-2'>
                    <h1 className='font-bold text-green-500 text-3xl'>VISION</h1>
                    <div className='p-2' >
                        <h1 className='font-bold text-2xl '>"TO BE A RENOWNED ORGANIZATION AT THE LEADING EDGE OF MEDICINE, PROVIDING QUALITY HEALTHCARE TO MEET OUR NATION'S ASPIRATIONS."</h1>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Mission;