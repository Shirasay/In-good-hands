import React,{useState, useContext} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';
import decoration from '../assets/Decoration.svg';
import Header from './Header';
import { LoginContext } from './LoginContext';

const Login=()=>{

    const history = useHistory();
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [invalidMail, setInvalidMail] = useState('');
    const [invalidPass,setInvalidPass] = useState('');
    const [emailWarning, setEmailWarning] = useState('');
    const [passWarning, setPassWarning] = useState('');
    const { setIsLoggedIn } = useContext(LoginContext);
    const { setApi } = useContext(LoginContext); 

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

    const handleLogin=()=>{
        if(!validateEmail(userEmail)) {
            setInvalidMail("Podany email jest nieprawidłowy!");
            setEmailWarning('error');
        }else{
            setInvalidMail('');
            setEmailWarning('');
        } 
        if(userPassword.length < 7){
            setInvalidPass('Podane hasło jest za krótkie!');
            setPassWarning('error');
        }else{
            setInvalidPass('');
            setPassWarning('');
        }
        if(validateEmail(userEmail) && userPassword.length >= 7){
            
            axios.get(`http://localhost:3004/Users?email=${userEmail}&password=${userPassword}`,{
            }, {
                withCredentials: true 
            })
            .then(response=> {
                console.log(response.config.url);
                if(response.data.length===0){
                    setInvalidMail("Podany email jest nieprawidłowy!");
                    setEmailWarning('error');
                    setInvalidPass('Podane hasło jest nieprawidłowe!');
                    setPassWarning('error');
                }else{
                    setIsLoggedIn(true);
                    setApi(response.config.url);
                    history.push("/");
                }
            })
                .catch(error => {
                  console.log(error);
                });
        }
    }
        return<>
            <section className='login-reg' id='login'>
                <div className='headerWindow'>
                    <Header/>
                </div>
                <div className='logContainer'>
                    <div className='logWindow'>
                        <h1>Zaloguj się</h1>
                        <img className='loginImage' src={decoration} alt='decoration'/>
                        <form className='login-form'>
                            <div>
                                <h6>Email</h6>
                                <input
                                    type='mail'
                                    className={emailWarning}
                                    onChange={e=>setUserEmail(e.target.value)}
                                    value={userEmail}
                                    required/>
                                <small>{invalidMail}</small>
                            </div>
                            <div>
                                <h6>Hasło</h6>
                                <input
                                    type='password'
                                    className={passWarning}
                                    onChange={e=>setUserPassword(e.target.value)}
                                    value={userPassword}
                                    required/>
                                <small>{invalidPass}</small>
                            </div>
                        </form>
                        <div className='log-btn'>
                            <NavLink to='/rejestracja'><button>Załóż konto</button></NavLink>
                            <button onClick={handleLogin}>Zaloguj się</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
}

export default Login;