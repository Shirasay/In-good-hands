import React,{ useState, useContext } from 'react';
import { FormContext } from '../FormContext';

const PageFour=()=>{

    const { setPage, setPageFour } = useContext(FormContext);
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [postcode, setPostcode] = useState('');
    const [telephone, setTelephone] = useState('');
    const [day, setDay] = useState('');
    const [hour, setHour] = useState('');
    const [info, setInfo] = useState('');

    const handlePage=(e)=>{
        e.preventDefault();
        setPageFour([street,city,postcode,telephone,day,hour,info])
        setPage('summary');
    }

    return<>
        <div id='page-four'>
            <div className='form-header page-four'>
                <h2>Ważne!</h2>
                <p>Podaj adres oraz termin odbioru rzeczy.</p>
            </div>
            <div className='giveaway-form'>
                <h5>Krok 4/4</h5>
                <h2>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>
                    <div className='page-four-container'>
                        <form>
                            <h5>Adres odbioru:</h5>
                            <label>Ulica
                                <input type='text' onChange={e=>setStreet(e.target.value)} value={street} required/>
                            </label>
                            <label>Miasto
                                <input type='text' onChange={e=>setCity(e.target.value)} value={city} required/>
                            </label>
                            <label>Kod<br/>pocztowy
                                <input type='text' onChange={e=>setPostcode(e.target.value)} value={postcode} required/>
                            </label>
                            <label>Numer<br/>telefonu
                                <input type='text' onChange={e=>setTelephone(e.target.value)} value={telephone} required/>
                            </label>
                        </form>
                        <form>
                            <h5>Termin odbioru:</h5>
                            <label>Data
                                <input type='text' onChange={e=>setDay(e.target.value)} value={day} required/>
                            </label>
                            <label>Godzina
                                <input type='text' onChange={e=>setHour(e.target.value)} value={hour} required/>
                            </label>
                            <div>
                                <h5 className='lastone'>Uwagi<br/>dla kuriera</h5>
                                <textarea  type='text' onChange={e=>setInfo(e.target.value)} value={info}/>
                            </div>
                        </form>
                </div>
                <div className='buttons-nav'>
                    <button onClick={()=>setPage('three')}>Wstecz</button>
                    <button onClick={handlePage}>Dalej</button>
                </div>
            </div>
        </div>
    </>
}

export default PageFour;