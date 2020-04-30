import React,{ useState, useContext } from 'react';
import { FormContext } from '../FormContext';

const PageThree=()=>{

    const { setPage, setPageThree } = useContext(FormContext);
    const [active, setActive] = useState('unactive');
    const [select, setSelect] = useState('select');
    const [selectedCity, setSelectedCity] = useState(` — wybierz — `);
    const [btnKid, setBtnKid] = useState('');
    const [btnMother, setBtnMother] = useState('');
    const [btnHomeless, setBtnHomeless] = useState('');
    const [btnDisable, setBtnDisable] = useState('');
    const [btnOld, setBtnOld] = useState('');
    const [organisation, setOrganisation] = useState('');

    const handlePage=(e)=>{
        e.preventDefault();
        setPageThree([selectedCity,btnKid,btnMother,btnHomeless,btnDisable,btnOld,organisation])
        setPage('four')
    }
 
    const handeOnClick=()=>{
        if(active==='unactive'){
            setActive('');
            setSelect('selected');
        }else{
            setActive('unactive');
            setSelect('select')
        }
    }

    const handleSelected=(value)=>{
        setActive('unactive');
        setSelect('select');
        setSelectedCity(value);
    }

    const handleChecked=(value)=>{
        if(value==='kid' && btnKid===''){
            setBtnKid('dzieciom');
        }else if(value==='kid' && btnKid!==''){
            setBtnKid('');
        }
        if(value==='mother' && btnMother===''){
            setBtnMother('samotnym matkom');
        }else if(value==='mother' && btnMother!==''){
            setBtnMother('');
        }
        if(value==='homeless' && btnHomeless===''){
            setBtnHomeless('bezdomnym');
        }else if(value==='homeless' && btnHomeless!==''){
            setBtnHomeless('');
        }
        if(value==='disable' && btnDisable===''){
            setBtnDisable('niepełnosprawnym');
        }else if(value==='disable' && btnDisable!==''){
            setBtnDisable('');
        }
        if(value==='old' && btnOld===''){
            setBtnOld('osobom starszym');
        }else if(value==='kid' && btnOld!==''){
            setBtnOld('');
        }
        
    };

    return<>
        <div id='page-three'>
            <div className='form-header'>
                <h2>Ważne!</h2>
                <p>Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
            </div>
            <div className='giveaway-form page-three'>
                <h5>Krok 3/4</h5>
                <div className='page-three-container'>
                    <h2>Lokalizacja:</h2>
                    <button className={select} onClick={handeOnClick}>{selectedCity}</button>
                    <ul className={active}>
                        <li onClick={e=>handleSelected(e.target.attributes.value.value)} value='Poznań'>&emsp;Poznań</li>
                        <li onClick={e=>handleSelected(e.target.attributes.value.value)} value='Warszawa'>&emsp;Warszawa</li>
                        <li onClick={e=>handleSelected(e.target.attributes.value.value)} value='Kraków'>&emsp;Kraków</li>
                        <li onClick={e=>handleSelected(e.target.attributes.value.value)} value='Wrocław'>&emsp;Wrocław</li>
                        <li onClick={e=>handleSelected(e.target.attributes.value.value)} value='Katowice'>&emsp;Katowice</li>                        
                    </ul>
                    <h5>Komu chcesz pomóc?</h5>
                    <div className='btn-whoToHelp'>
                        <div className='top-btn'>
                            <button
                                className='first-btn'
                                value='kid'
                                onClick={e=>{e.target.classList.toggle('checked')
                                handleChecked(e.target.value)}}
                                >dzieciom</button>
                            <button
                                className='second-btn'
                                value='mother'
                                onClick={e=>{e.target.classList.toggle('checked')
                                handleChecked(e.target.value)}}
                                >samotnym matkom</button>
                            <button
                                className='third-btn'
                                value='homeless'
                                onClick={e=>{e.target.classList.toggle('checked')
                                handleChecked(e.target.value)}}
                                >bezdomnym</button>
                        </div>
                        <div className='bottom-btn'>
                            <button
                                className='first-btn'
                                value='disable'
                                onClick={e=>{e.target.classList.toggle('checked')
                                handleChecked(e.target.value)}}
                                >niepełnosprawnym</button>
                            <button
                                className='second-btn'
                                value='old'
                                onClick={e=>{e.target.classList.toggle('checked')
                                handleChecked(e.target.value)}}
                                >osobom starszym</button>
                        </div>
                    </div>
                    <h5>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h5>
                    <input type='text'onChange={e=>setOrganisation(e.target.value)} value={organisation}/>
                </div>   
                <div className='buttons-nav'>
                    <button onClick={()=>setPage('two')}>Wstecz</button>
                    <button onClick={handlePage}>Dalej</button>
                </div>
            </div>
        </div>
    </>
}
export default PageThree;