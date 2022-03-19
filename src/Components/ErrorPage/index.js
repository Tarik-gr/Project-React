import React from 'react'
import { Link } from 'react-router-dom';
import errorImg from '../../images/404.png'

const ErrorPage = () => {
    return (
        <div style={{textAlign: 'center',}}>
            <h2>404</h2>
            <p>Cette page n'existe pas</p>
            <img src={errorImg} alt="page404"/>
            <br />
            <Link to='/' className='btn btn-block btn-lg btn-primary'> Aller à la page d'accueil </Link>
        </div>
    )
}

export default ErrorPage
