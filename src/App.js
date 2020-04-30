import React,{ useState } from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Logout from './components/Logout';
import Giveaway from './components/Giveaway';
import { LoginContext } from './components/LoginContext';
import { FormContext } from './components/FormContext';

function App() {

  const [pageOne, setPageOne] = useState([]);
  const [pageTwo, setPageTwo] = useState();
  const [pageThree, setPageThree] = useState([]);
  const [pageFour, setPageFour] = useState([]);
  const [page, setPage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [api, setApi] = useState('');
  const [saveData, setSaveData] = useState('');
  const [bags, setBags] = useState('');
  const [supported, setSupported] = useState('');

  return <HashRouter>
  <>
    <Switch>
      <FormContext.Provider value={{supported, setSupported, 
        bags, setBags, page, setPage, pageOne, setPageOne, pageTwo, 
        setPageTwo, pageThree, setPageThree, pageFour, setPageFour , saveData, setSaveData}}>
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, api, setApi }}>
          <Route exact path='/' component={Home}/>
          <Route path='/logowanie' component={Login}/>
          <Route path='/rejestracja' component={Registration}/>
          <Route path='/wylogowano' component={Logout}/>
          <Route path='/oddaj-rzeczy' component={Giveaway}/>
        </LoginContext.Provider>      
      </FormContext.Provider>
    </Switch>
  </>
</HashRouter>
    
}

export default App;