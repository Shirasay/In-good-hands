import React,{useState, useContext} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';
import decoration from'../assets/Decoration.svg'
import Header from './Header';
import { LoginContext } from './LoginContext'

const Registration=()=>{
    
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [passwordVal, setPasswordVal] = useState('')
    const [invalidMail, setInvalidMail] = useState('');
    const [invalidPass,setInvalidPass] = useState('');
    const [invalidPassVal, setInvalidPassVal] = useState('');
    const [emailWarning, setEmailWarning] = useState('');
    const [passWarning, setPassWarning] = useState('');
    const [passValWarning, setPassValWarning] = useState('');
    const { setIsLoggedIn } = useContext(LoginContext);
    const { setApi } = useContext(LoginContext);
     
    const history = useHistory();

    const API = 'http://localhost:3004/Users';
    

    const validateEmail=(email)=>{
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const handleSuccessSubmit=()=>{
        setUserEmail('');
        setUserPassword('');
        setPasswordVal('');
    }; 

    const handleRegistration=()=>{
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
        if (passwordVal!==userPassword){
            setInvalidPassVal('Podane hasła są różne!');
            setPassValWarning('error');
        }else if(passwordVal===''){
            setInvalidPassVal('Pole jest puste!');
            setPassValWarning('error');
        }else if(passwordVal===userPassword && passwordVal.length < 7){
                setInvalidPassVal(invalidPass);
                setPassValWarning('error');
        }else{
            setInvalidPassVal('');
            setPassValWarning('');
        }
         if(validateEmail(userEmail) && userPassword.length >= 7 && passwordVal===userPassword){
            handleSuccessSubmit();
            axios.post(`${API}`,{
                email: userEmail,
                password: userPassword,
                data:{}
            })
            .then(response=> {
                setIsLoggedIn(true);
                setApi(response.config.url);
                history.push("/");
            })
                .catch(error => {
                  console.log(error);
                });
        }
    }

    return<>
        <section className='login-reg' id='registration'>
            <div className='headerWindow'>
                <Header/>
            </div>
            <div className='logContainer'>
                <div className='logWindow'>
                    <h1>Załóż konto</h1>
                    <img className='loginImage' src={decoration} alt='decoration'/>
                    <form className='registration-form'>
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
                        <div>
                            <h6>Powtórz hasło</h6>
                            <input
                                type='password'
                                className={passValWarning}
                                onChange={e=>setPasswordVal(e.target.value)}
                                value={passwordVal}
                                required/>
                            <small>{invalidPassVal}</small>
                        </div>
                    </form>
                    <div className='log-btn'>
                        <NavLink to='logowanie'><button>Zaloguj się</button></NavLink>
                        <button onClick={handleRegistration}>Załóż konto</button>
                    </div>
                </div>
            </div>
        </section>
</>
}

export default Registration;