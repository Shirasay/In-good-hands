import React from 'react';
import decoration from '../assets/Decoration.svg'

const Login=({button_value})=>{


    if(button_value==='login'){
        return<>
            <section className='login-reg' id='login'>
                <div className='loginWindow'>
                    <h1>Zaloguj się</h1>
                    <img src={decoration}/>
                    <form className='login-form'>
                        <div>
                            <h6>Email</h6>
                            <input/>
                        </div>
                        <div>
                            <h6>Hasło</h6>
                            <input/>
                        </div>
                    </form>
                    <div className='log-btn'>
                        <button>Załóż konto</button>
                        <button>Zaloguj się</button>
                    </div>
                </div>
            </section>
        </>
    }
    if(button_value==='registration'){
        return<>
            <section className='login-reg' id='registration'>
                <div className='loginWindow'>
                    <h1>Zaloguj się</h1>
                    <img src={decoration}/>
                    <form className='registration-form'>
                        <div>
                            <h6>Email</h6>
                            <input/>
                        </div>
                        <div>
                            <h6>Hasło</h6>
                            <input/>
                        </div>
                        <div>
                            <h6>Powtórz hasło</h6>
                            <input/>
                        </div>
                    </form>
                    <div className='log-btn'>
                        <button>Zaloguj się</button>
                        <button>Załóż konto</button>
                    </div>
                </div>
            </section>
        </>
    }
}

export default Login