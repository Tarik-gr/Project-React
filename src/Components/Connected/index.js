import React , { useState, useContext, useEffect } from 'react'
import Logout from '../Logout'
import Quiz from '../Quiz'
import { MyContext } from '../Firebase'

const Connected = (props) => {

    const [userSession, setUserSession] = useState(null); // user session 


    //Get the context consumer of firebase
    const contextFirebase = useContext(MyContext)

    useEffect(() => {
        contextFirebase.auth.onAuthStateChanged(user =>{
            user ? setUserSession(user) : props.history.push('/') // check if connected , if not redirect to landing page
        })
    }, [])


   return userSession === null ? (
        <div>
            <p>Loading .... </p>
        </div>
    ) : (
        <div className='container connected-page pt-1'>
            <Logout/>
            <Quiz/>
        </div>
    )

}

export default Connected
