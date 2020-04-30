import React,{ useState, useContext } from 'react';
import { FormContext } from '../FormContext';

const PageTwo=()=>{

    const { setPage, setPageTwo } = useContext(FormContext);
    const [active, setActive] = useState('unactive');
    const [select, setSelect] = useState('select');
    const [selected, setSelected] = useState(` — wybierz — `)

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
        setSelected(value)
        setActive('unactive');
        setSelect('select');
    }

    const handlePage=(e)=>{
        e.preventDefault();
        setPageTwo(selected)
        setPage('three')
    }

    return<>
        <div id='page-two'>
            <div className='form-header'>
                <h2>Ważne!</h2>
                <p>Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
            </div>
            <div className='giveaway-form page-two'>
                <h5>Krok 2/4</h5>
                <div className='bag-quantity'>
                    <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                    <div>
                        <p>Liczba 60l worów:</p>
                        <button className={select} onClick={handeOnClick}> {selected} </button>
                    </div>
                    <ul className={active}>
                        <li onClick={e=>handleSelected(e.target.value)} value='1'>1</li>
                        <li onClick={e=>handleSelected(e.target.value)} value='2'>2</li>
                        <li onClick={e=>handleSelected(e.target.value)} value='3'>3</li>
                        <li onClick={e=>handleSelected(e.target.value)} value='4'>4</li>
                        <li onClick={e=>handleSelected(e.target.value)} value='5'>5</li>
                    </ul>
                </div>                        
                <div className='buttons-nav'>
                    <button onClick={()=>setPage('')}>Wstecz</button>
                    <button onClick={handlePage}>Dalej</button>
                </div>
            </div>
        </div>
    </>
}

export default PageTwo;