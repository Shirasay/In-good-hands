import React,{ useState, useContext } from 'react';
import decoration from '../assets/Decoration.svg';
import Header from './Header';
import ContactUs from './Main/ContactUs';
import PageOne from './Giveaway/PageOne';
import PageTwo from './Giveaway/PageTwo';
import PageThree from './Giveaway/PageThree';
import PageFour from './Giveaway/PageFour';
import PageSummary from './Giveaway/PageSummary';
import Login from './Login';
import { FormContext } from './FormContext';
import { LoginContext } from './LoginContext';

const GiveAway=()=>{
    
    const { page } = useContext(FormContext);
    const { isLoggedIn } = useContext(LoginContext);
    
    return<>
        {isLoggedIn && <section className='giveaway'>
                <div className='left-giveaway'>
                </div>
                <div className='right-giveaway'>
                    <div className='giveaway-header'>
                        <Header/>
                    </div>
                    <div className='giveaway-intro'>
                        <h1>Oddaj rzeczy, których już nie chcesz<br/>POTRZEBUJĄCYM</h1>
                        <img src={decoration} alt='decoration'/>
                        <h2>Wystarczą 4 proste kroki:</h2>
                        <div className='four-squares'>
                            <div>
                                <article>    
                                    <h5>1</h5>
                                    <h6>Wybierz<br/>rzeczy</h6>
                                </article> 
                            </div>
                            <div>
                                <article>
                                    <h5>2</h5>
                                    <h6>Spakuj je<br/>w worki</h6>
                                </article>
                            </div>
                            <div>
                                <article>
                                    <h5>3</h5>
                                    <h6>Wybierz<br/>fundację</h6>
                                </article>    
                            </div>
                            <div>
                                <article>
                                    <h5>4</h5>
                                    <h6>Zamów<br/>kuriera</h6>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
        </section>}
        {isLoggedIn ? <section className='giveaway-form-section'>
            {page==='' && <PageOne/>}
            {page==='two' && <PageTwo/>}
            {page==='three' && <PageThree/>}
            {page==='four' && <PageFour/>}
            {page==='summary' && <PageSummary/>}
            {page==='done' && <div className='giveaway-form thanks'>
                <div>
                    <h1>Dziękujemy za przesłanie formularza<br/>Na maila prześlemy wszelkie<br/>informacje o odbiorze.</h1>
                    <img src={decoration}/>
                </div>
            </div>}
        </section> : <Login/>}
        {isLoggedIn && <ContactUs/>}
    </>
}

export default GiveAway;