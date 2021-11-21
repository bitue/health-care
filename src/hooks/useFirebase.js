
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

import fireBaseInit from "../firebase/initFirebase";


const useFirebase = () => {

    const [user, setUser] = useState({})

    const [loading , setLoading] = useState(true)

    const [error, setError] = useState('')

  
    const [status , setStatus] = useState('')

    fireBaseInit()

    const auth = getAuth();

    const signInWIthGoogle = () => {
       
        const googleProvider = new GoogleAuthProvider();
        return   signInWithPopup(auth, googleProvider)


    }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
               
            }
            else{
                setUser({})
            }

            setLoading(false)

           
        });

        return ()=> unsubscribe
    }, [])


    const signOutFromGoogle = () => {
        setLoading(true)
        signOut(auth)
        .then(() => {
            setUser({})
            setStatus('')
        })
        .catch((error) => {
            setError(error.message)
        })
        .finally(()=> setLoading(false))
    }

    //create user with sign in and password

    const createUser = (email, password) => {
       


            createUserWithEmailAndPassword(auth, email, password)

                .then((userCredential) => {
                    setUser(userCredential.user)
                    setStatus('create user successful')
                    setError('')
                })
                .catch((error) => {
                    setError(error.message)
                    setStatus('')

                })


        


    }

    //sign in with existing user

    const signInwithEmail = (email, password) => {

       signInWithEmailAndPassword(auth, email, password)

       .then((userCredential) => {
        setUser(userCredential.user)
        setStatus('Sign in successful')
        setError('')
       

        
    })
    .catch((error) => {
        setError(error.message)
        setStatus('')
    })


    }




    return {
        signInWIthGoogle, signOutFromGoogle, user, error, createUser , signInwithEmail , setError , status , setStatus , loading , setLoading
    }







}

export default useFirebase