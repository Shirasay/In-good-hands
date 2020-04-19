import React,{ useContext } from 'react';
import { NavLink } from 'react-router-dom';
import decoration from '../assets/Decoration.svg';
import Header from './Header';
import { LoginContext } from './LoginContext'

const Start=()=>{

    const {isLoggedIn} = useContext(LoginContext);
    
    return <>
        <header className='container' id='start'>
            <div id='header-div-left'>
            </div>
            <div id='header-div-right'>
               <Header/>
                <div className='header-intro'>
                    <h2>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img src={decoration} alt='decoration'/>
                    <div className='header-collect-buttons'>
                        {!isLoggedIn ? <>
                        <NavLink to="/logowanie"><button id='give-cloths'>ODDAJ<br/>RZECZY</button></NavLink>
                        <NavLink to="/logowanie"><button id='organise-collection'>ZORGANIZUJ<br/>ZBIÓRKĘ</button></NavLink>
                        </> : <>
                        <NavLink to="/oddaj-rzeczy"><button id='give-cloths'>ODDAJ<br/>RZECZY</button></NavLink>
                        <NavLink to="/oddaj-rzeczy"><button id='organise-collection'>ZORGANIZUJ<br/>ZBIÓRKĘ</button></NavLink>
                        </>
                        }
                    </div>
                </div>
            </div>
        </header>
    </>
}

export default Start;