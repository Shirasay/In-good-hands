import React,{ useContext } from 'react';
import YellowStatistics from './Main/YellowStatistics';
import SimpleSteps from './Main/SimpleSteps';
import AboutUs from './Main/AboutUs';
import WhoWeHelp from './Main/WhoWeHelp';
import ContactUs from './Main/ContactUs.js';
import { LoginContext } from './LoginContext';

const Main=()=>{
    
    const { isLoggedIn } = useContext(LoginContext);
    
    return <>
    <nav className='container'>
        {isLoggedIn && <YellowStatistics/>}
        <SimpleSteps/>
        <AboutUs/>
        <WhoWeHelp/>
        <ContactUs/>
    </nav>
    </>
}

export default Main;