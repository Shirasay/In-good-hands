import React,{ useContext, useEffect } from 'react';
import axios from 'axios';
import icon1 from '../../assets/Icon-1.svg';
import icon4 from '../../assets/Icon-4.svg';
import { FormContext } from '../FormContext';
import { LoginContext } from '../LoginContext';

const PageSummary=()=>{

    const { pageOne, pageTwo, pageThree, pageFour, page, setPage, saveData, supported, setSupported, bags, setBags } = useContext(FormContext);
    const { api } = useContext(LoginContext);

    useEffect(() => {
        axios.get(api,{
        })
        .then(response=> {
            setBags(response.data[0].data.bags)
            setBags(PrevState=>PrevState+pageTwo)
            setSupported(response.data[0].data.supported)
            setSupported(PrevState=>PrevState+1)
        })
            .catch(error => {
              console.log(error);
            });
    }, [page])

    console.log(pageTwo);
    let data = {
        supported: supported,
        bags: bags
    };

    let collectedBags = 0;

    if(pageTwo===1){
        collectedBags = `${pageTwo} worek`;
    }else{
        collectedBags = `${pageTwo} worki`;
    }

    const handlePage=()=>{
        axios.patch(`http://localhost:3004/Users/${saveData}/`,{
            data
        })
        .then(response=> {
            console.log(response);
        })
            .catch(error => {
              console.log(error);
            }); 
        setPage('done');
    }

    return<>
        <div id='page-summary'>
            <div className='giveaway-form'>
                <h2>Podsumowanie Twojej darowizny</h2>
                <div className='giveaway-form-summary'>
                    <div className='items-summary'>
                        <h5>Oddajesz:</h5>
                        <div>                       
                            <img src={icon1}/>
                            <p>{collectedBags}, {pageOne.join(' ')}, {(pageThree.slice(1)).join(' ')}</p>
                        </div>
                        <div>
                            <img src={icon4}/>
                            <p>dla lokalizacji:{pageThree[0]}</p>
                        </div>
                    </div>
                    <div className='address-summary'>
                        <article>
                            <h5>Adres odbioru:</h5>
                            <div>
                                <p>Ulica</p>
                                <p>{pageFour[0]}</p>
                            </div>
                            <div>
                                <p>Miasto</p>
                                <p>{pageFour[1]}</p>
                            </div>
                            <div>
                                <p>Kod<br/>pocztowy</p>
                                <p>{pageFour[2]}</p>
                            </div>
                            <div>
                                <p>Numer<br/>telefonu</p>
                                <p>{pageFour[3]}</p>
                            </div>
                        </article>
                        <article>
                            <h5>Termin odbioru:</h5>
                            <div>
                                <p>Data</p>
                                <p>{pageFour[4]}</p>                        
                            </div>
                            <div>
                                <p>Godzina</p>
                                <p>{pageFour[5]}</p>
                            </div>
                            <div>
                                <p>Uwago<br/>dla kuriera</p>
                                <p>{pageFour[6]}</p>
                            </div>
                        </article>
                    </div>    
                </div>
                <div className='buttons-nav'>
                    <button onClick={()=>setPage('four')}>Wstecz</button>
                    <button onClick={handlePage}>Potwierdzam</button>
                </div>  
            </div>
        </div>
    </>
}

export default PageSummary;