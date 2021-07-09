import React, {useContext} from 'react'
import { MyContext } from '../Firebase'


const Logout = () => {


    //Get the context consumer of firebase
    const contextFirebase = useContext(MyContext)

    return (
        <div className='row'>
            <div className="col signOutbtn">
                <button onClick={()=>contextFirebase.signoutUser()} type="button" className="btn btn-outline-dark ">Se déconnecter</button>
            </div>
        </div>
    )
}

export default Logout
