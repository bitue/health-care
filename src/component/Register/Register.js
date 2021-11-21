import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const {createUser , error ,user , signOutFromGoogle, status} = useContext(AuthContext)
    const [ email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    
    const getEmailField = (event) => {
        setEmail(event.target.value)

    }
    const getPasswordField = (event) => {
      setPassword(event.target.value)
    }
   
    return (
        <div className='container mx-auto text-center md:my-20 my-10'>
            <div>
                <h1 className='font-bold text-green-500 text-3xl text-center '>Register here</h1>
                <div className='space-y-2'>
                    <p className='font-semibold '>Enter Email</p>
                    <p><input onBlur={getEmailField} className='bg-gray-200 rounded-2xl w-1/2 py-1 px-3' type="text" placeholder='enter your email' /></p>
                    <p className='font-semibold '>Enter Password</p>
                    <p><input onBlur={getPasswordField} className='bg-gray-200 rounded-2xl w-1/2 py-1 px-3' placeholder='enter your password' type="password" /></p>

                    {
                        error.length ?    <p className='text-red-700 font-bold'>{error}</p> : null
                    }
                    <div>
                    {
                        status.length ? <p className='text-green-600 font-bold'>{status}</p> : null
                    }

                    </div>
                   
                   
                    <div>
                        {
                            user.email ?   <button className='px-3 py-1 font-semibold rounded-3xl border-2 ' onClick={signOutFromGoogle}>SignOut</button> :
                        <div className=''>
                            <button className='px-3 py-1 font-semibold rounded-3xl border-2' onClick={()=> createUser(email , password)}>Register</button>
                           
                        </div>
                        }
                      

                     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;