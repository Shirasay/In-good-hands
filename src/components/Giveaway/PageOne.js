import React,{ useState,useContext } from 'react';
import { FormContext } from '../FormContext';

const PageOne=()=>{
    
    const { setPage, setPageOne } = useContext(FormContext);
    const [goodClothes, setGoodClothes] = useState('');
    const [badClothes, setBadClothes] = useState('');
    const [toys, setToys] = useState('');
    const [books, setBooks] = useState('');
    const [others, setOthers]= useState('');

    const handleCheck=(value)=>{
        if(value==='goodClothes' && goodClothes===''){
            setGoodClothes('ubrania, które nadają się do ponownego użycia')
        }else if (value==='goodClothes' && goodClothes!==''){
            setGoodClothes('')
        }
        if(value==='badClothes' && badClothes===''){
            setBadClothes('ubrania do wyrzucenia')
        }else if (value==='badClothes' && badClothes!==''){
            setBadClothes('')
        } 
        if(value==='toys' && toys===''){
            setToys('zabawki')
        }else if (value==='toys' && toys!==''){
            setToys('')
        }
        if(value==='books' && books===''){
            setBooks('książki')
        }else if (value==='books' && books!==''){
            setBooks('')
        }
        if(value==='others' && others===''){
            setOthers('Inne')
        }else if (value==='others' && others!==''){
            setOthers('')
        }
    };
    
    const handlePage=()=>{
        setPageOne([goodClothes,badClothes,toys,books,others]);
        setPage('two');
    }

    return <>
        <div id='page-one'>
                <div className='form-header'>
                    <h2>Ważne!</h2>
                    <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                </div>
                <div className='giveaway-form page-one'>
                    <h5>Krok 1/4</h5>
                    <h2>Zaznacz co chcesz oddać:</h2>    
                        <form>
                            <div>
                                <input type='checkbox' onClick={e=>{handleCheck(e.target.attributes.value.value)}} value='goodClothes'/>
                                <p>ubrania, które nadają się do ponownego użycia</p>
                            </div>
                            <div>
                                <input type='checkbox' onClick={e=>{handleCheck(e.target.attributes.value.value)}} value='badClothes'/>
                                <p>ubrania, do wyrzucenia</p>
                            </div>
                            <div>
                                <input type='checkbox' onClick={e=>{handleCheck(e.target.attributes.value.value)}} value='toys'/>
                                <p>zabawki</p>
                            </div>
                            <div>
                                <input type='checkbox' onClick={e=>{handleCheck(e.target.attributes.value.value)}} value='books'/>
                                <p>ksiażki</p>
                            </div>
                            <div>
                                <input title='others' onClick={e=>{handleCheck(e.target.attributes.value.value)}} type='checkbox' value='others'/>
                                <p>Inne</p>
                            </div>
                        </form>
                    <button className='btn' onClick={handlePage}>Dalej</button>
                </div>
            </div>
    </>
}

export default PageOne;