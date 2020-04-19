import React from 'react';
import decoration from '../../assets/Decoration.svg';
import signature from '../../assets/Signature.svg';

const AboutUs=()=>{
    return <>
        <section className='aboutUs containere' id='aboutUs'>
            <div className='aboutUs-left'>
                <h2>O nas</h2>
                <img className='decoration'src={decoration} alt='decoration'/>
                <h3>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</h3>
                <div className='signature'>
                    <img src={signature} alt='signature'/>
                </div>
            </div>
            <div className='aboutUs-peopleBackground'></div>
        </section>
    </>
}
export default AboutUs;