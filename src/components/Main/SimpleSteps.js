import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import decoration from '../../assets/Decoration.svg';
import icon1 from '../../assets/Icon-1.svg';
import icon2 from '../../assets/Icon-2.svg';
import icon3 from '../../assets/Icon-3.svg';
import icon4 from '../../assets/Icon-4.svg';
import { FormContext } from '../FormContext';
import { LoginContext } from '../LoginContext';

const SimpleSteps=()=>{

    const { setPage } = useContext(FormContext);
    const { isLoggedIn } = useContext(LoginContext);

    return<>
        <section className='simpleSteps container' id='simpleSteps'>
            <div className='simpleSteps-intro'>
                <h1>Wystarczą 4 proste kroki</h1>
                <img src={decoration} alt='decoration'/>
            </div>
            <div className='simpleSteps-icons'>
                <div>
                    <img src={icon1} alt='icon1'/>
                    <h5>Wybierz rzeczy</h5>
                    <p className='line'></p>
                    <p className='additional-info'>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div>
                    <img src={icon2} alt='icon2'/>
                    <h5>Spakuj je</h5>
                    <p className='line'></p>
                    <p className='additional-info'>skorzystaj z worków na śmieci</p>
                </div>
                <div>
                    <img src={icon3} alt='icon3'/>
                    <h5>Zdecyduj komu chcesz pomóc</h5>
                    <p className='line'></p>
                    <p className='additional-info'>wybierz zaufane miejsce</p>
                </div>
                <div>
                    <img src={icon4} alt='icon4'/>
                    <h5>Zamów kuriera</h5>
                    <p className='line'></p>
                    <p className='additional-info'>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className='give-clothes-div'>
                {isLoggedIn ? 
                <NavLink to="/oddaj-rzeczy"><button onClick={()=>setPage('')}  id='give-clothes-btn'>ODDAJ<br/>RZECZY</button></NavLink> :
                <NavLink to="/logowanie"><button id='give-clothes-btn'>ODDAJ<br/>RZECZY</button></NavLink>}
            </div>
        </section>
    </>
}
export default SimpleSteps;