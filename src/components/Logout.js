import React from 'react';
import decoration from '../assets/Decoration.svg';
import { NavLink } from 'react-router-dom';
import Header from './Header';

const Logout=()=>{

    return<>
        <section className='logout'>
            <div className='headerWindow'>
                <Header/>
            </div>
            <div className='logContainer'>
                <div className='logWindow'>
                    <h1>Wylogowanie nastąpiło pomyślnie!</h1>
                    <img className='logoutImage' src={decoration} alt='decoration'/>
                    <NavLink to="/"><button className='logoutBtn'>Strona główna</button></NavLink>
                </div>
            </div>
        </section>
    </>   
}

export default Logout;