import React, { useContext, useState } from 'react';
import { NavLink, useLocation , useHistory } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';



const SignIn = () => {

   


    const { signInWIthGoogle, signOutFromGoogle, user, error, signInwithEmail, status, setStatus , setUser , setError, setLoading , loading } = useContext(AuthContext)

    const location = useLocation()
    const history = useHistory()
    const redirectUri = location.state?.from || '/home'
    console.log(redirectUri)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const getEmail = (event) => {
        setEmail(event.target.value)
        console.log(email)

    }
    const getPassword = (event) => {
        setPassword(event.target.value)
        console.log(password)
    }
    const handleGoogleSignin = () => {
        setLoading(true)
        signInWIthGoogle()

        .then((result) => {
            history.push(redirectUri)

            
            setStatus('google sign in successful')

        })
        .catch((error) => {
            setError(error.message)
            setStatus('')
        })
        .finally(()=> {
            setLoading(false)
        })
    }

  
    

    return (
        <div className='container mx-auto text-center md:my-20 my-10'>
            <div >
                <h1 className='font-bold text-green-500 text-3xl text-center '>Sign in here</h1>
                <div className='space-y-2'>
                    <p className='font-semibold '>Enter Email</p>
                    <p><input className='bg-gray-200 rounded-2xl w-1/2 py-1 px-3' type="text" placeholder='enter your email' onBlur={getEmail} /></p>
                    <p className='font-semibold '>Enter Password</p>
                    <p><input className='bg-gray-200 rounded-2xl w-1/2 py-1 px-3' placeholder='enter your password' onBlur={getPassword} type="password" /></p>
                    <div>
                        {
                            status.length ?
                                <div>

                                    <button className='px-3 py-1 font-semibold rounded-3xl border-2 ' onClick={signOutFromGoogle}>SignOut</button>

                                </div>
                                :
                                <div className='space-x-5'>
                                    <button onClick={signInwithEmail } className='px-3 py-1 font-semibold rounded-3xl border-2'>Sign in</button>

                                    <button className='px-3 py-1 font-semibold rounded-3xl border-2' onClick={handleGoogleSignin}>Sign in with Google</button>
                                </div>
                        }
                        {
                            status.length ? <p className='font-bold text-green-500'>{status}</p> : null
                        }
                        {
                            error.length ? <p className='font-bold text-red-500'>{error}</p> : null
                        }

                        <p>if you are new ? <NavLink to='/register' activeClassName='underline' className='text-green-500'>create new account</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;