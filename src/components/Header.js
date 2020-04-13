import React from 'react';
import { Link } from 'react-scroll';
import decoration from '../assets/Decoration.svg';
// import Login from './login';

const Header=()=>{
    return <>
        <header className='container' id='start'>
            <div id='header-div-left'>
            </div>
            <div id='header-div-right'>
                <div className='header-log-buttons'>
                    <button id='login' className='log'>Zaloguj</button>
                    <button id='register' className='log'>Załóż konto</button>
                </div>
                    <ul className='header-menu'>
                        <li><Link
                            activeClass="active"
                            to="start"
                            spy={true}
                            smooth={true}
                            offset={70}
                            duration= {500}
                            >
                                <a herf='!#'>Start</a>
                            </Link>    
                        </li>
                        <li><Link
                            activeClass="active"
                            to="simpleSteps"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                            >
                                <a herf='!#'>O co Chodzi?</a>
                            </Link>
                        </li>
                        <li>
                        <Link
                            activeClass="active"
                            to="aboutUs"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                            >
                                <a herf='!#'>O nas</a>
                            </Link>
                        </li>
                        <li><Link
                            activeClass="active"
                            to="whoWeHelp"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration= {500}
                            >
                                <a herf='!#'>Fundacja i organizacje</a>
                            </Link>
                        </li>
                        <li><Link
                            activeClass="active"
                            to="contactUs"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                            >
                                <a herf='!#'>Kontakt</a>
                            </Link>
                        </li>
                    </ul>
                <div className='header-intro'>
                    <h2>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img src={decoration} alt='decoration'/>
                    <div className='header-collect-buttons'>
                        <button id='give-cloths'>ODDAJ<br/>RZECZY</button>
                        <button id='organise-collection'>ZORGANIZUJ<br/>ZBIÓRKĘ</button>
                    </div>
                </div>
                {/* <Login/> */}
            </div>
        </header>
    </>
}

export default Header;