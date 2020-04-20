import React,{useContext, useEffect} from 'react';
import axios from 'axios';
import { FormContext } from '../FormContext';
import { LoginContext } from '../LoginContext';

const YellowStatistics=()=>{

    const { bags, supported, setBags, setSupported } = useContext(FormContext);
    const { api, isLoggedIn } = useContext(LoginContext);
    
    useEffect(() => {
        axios.get(api,{
        })
        .then(response=> {
            setBags(response.data[0].data.bags)
            setSupported(response.data[0].data.supported)
        })
            .catch(error => {
              console.log(error);
            });
    }, [isLoggedIn])
    return<>
        <section className='yellowStatistic'>
            <div className='given-bags'>
                {bags ? <h1>{bags}</h1> : <h1>0</h1> }
                <h6>ODDANYCH WORKÓW</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className='supported-organisations'>
                {supported ? <h1>{supported}</h1> : <h1>0</h1> }
                <h6>WSPARTYCH ORGANIZACJI</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className='organised-collections'>
                <h1>0</h1>
                <h6>ZORGANIZOWANY ZBIÓREK</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
        </section>
    </>
}
export default YellowStatistics;