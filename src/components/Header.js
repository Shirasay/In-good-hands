import React,{ useState,useContext,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { LoginContext } from './LoginContext';

const Header=()=>{
    
    const [user, setUser] = useState();
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
    const { api, setApi } = useContext(LoginContext);
    
    useEffect(() => {
        axios.get(api,{
        })
        .then(response=> {
            console.log(response);
            setUser(response.data[0].email)          
        })
            .catch(error => {
              console.log(error);
            });
    }, [isLoggedIn])

    const handleLogOut=()=>{
        setApi('');
        setIsLoggedIn(false)
    }

    return<>
        <div className='header-log-buttons'>
        {!isLoggedIn ? <>
            <NavLink to="/logowanie"><button id='login' className='log'>Zaloguj</button></NavLink>
            <NavLink to="/rejestracja"><button id='register' className='log'>Załóż konto</button></NavLink>
        </> : <>
            <p>Cześć {user}!</p>
            <NavLink to='/oddaj-rzeczy'><button id='giveaway' className='log loggedin'>Oddaj rzeczy</button></NavLink>
            <NavLink to='/wylogowano'><button id='logout' onClick={handleLogOut} className='log loggedin'>Wyloguj</button></NavLink>
        </>}
        </div>
        <ul className='header-menu'>
            <NavLink to="/" style={{textDecoration: 'none'}}><li>Start</li></NavLink>
            <Link
                activeClass="active"
                to="simpleSteps"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
                ><li>O co Chodzi?</li>
            </Link>
            <Link
                activeClass="active"
                to="aboutUs"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}
                ><li>O nas</li>
            </Link>
            <Link
                activeClass="active"
                to="whoWeHelp"
                spy={true}
                smooth={true}
                offset={50}
                duration= {500}
                ><li>Fundacja i organizacje</li>
            </Link>
            <Link
                activeClass="active"
                to="contactUs"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}
                ><li>Kontakt</li>
            </Link>
        </ul>
    </>
}

export default Header;