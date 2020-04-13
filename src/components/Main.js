import React from 'react';
/*import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';*/
import YellowStatistics from './Main-yellowStatistics';
import SimpleSteps from './Main-simpleSteps';
import AboutUs from './Main-aboutUs';
import WhoWeHelp from './Main-whoWeHelp';
import ContactUs from './Main-contactUs.js';

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