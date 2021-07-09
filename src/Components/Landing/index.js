import React , { useRef } from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {

    const refLeftCol = useRef(null); // ref to get the left column and cusomize it on Hover
    const refRightCol = useRef(null); // ref to get the left column and cusomize it on Hover

    // change the appearance of the columns on hover
    const changeLeftBackground = ()=>{
        refLeftCol.current.classList.add('leftBackground')
    }
    const changeRightBackground = ()=>{
        refRightCol.current.classList.add('leftBackground')
    }
    const RemoveLeftBackground = ()=>{
        refLeftCol.current.classList.remove('leftBackground')
    }
    const RemoveRightBackground = ()=>{
        refRightCol.current.classList.remove('leftBackground')
    }


    return (
        <main className="container bg-light landingPage">
            <div className="row h-100">
                <div ref ={refLeftCol} onMouseOver={changeLeftBackground} onMouseOut={RemoveLeftBackground} className="col leftCol">
                    <Link to='/signup'  className='btn btn-block btn-lg btn-light'>Inscription</Link>
                </div>
                <div ref ={refRightCol} onMouseOver={changeRightBackground} onMouseOut={RemoveRightBackground} className="col rightCol">
                    <Link to='/login' className='btn btn-block btn-light btn-lg'>Connexion</Link>
                </div>
            </div>
        </main>
    )
}

export default Landing
