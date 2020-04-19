import React from 'react';
import YellowStatistics from './Main/YellowStatistics';
import SimpleSteps from './Main/SimpleSteps';
import AboutUs from './Main/AboutUs';
import WhoWeHelp from './Main/WhoWeHelp';
import ContactUs from './Main/ContactUs.js';

const Main=()=>{
    
    
    
    return <>
    <nav className='container'>
        <YellowStatistics/>
        <SimpleSteps/>
        <AboutUs/>
        <WhoWeHelp/>
        <ContactUs/>
    </nav>
    </>
}

export default Main;