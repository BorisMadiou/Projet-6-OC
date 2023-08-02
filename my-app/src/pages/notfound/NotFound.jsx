import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';

function NotFound() {
    return(
        <div className='not-found'>
        <p className='error-big'>404</p>
        <p className='error-small'>Oups! La page que vous demandez n'existe pas.</p>
        <Link className='link' to="/">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default NotFound;