import React,{useState} from 'react';

const YellowStatistics=()=>{
    const[bags, setBags]=useState(0)
    const[organisations, setOrganisations]=useState(0)
    const[collections, setcollections]=useState(0)

    return<>
        <section className='yellowStatistic'>
            <div className='given-bags'>
                <h1>{bags}</h1>
                <h6>ODDANYCH WORKÓW</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className='supported-organisations'>
                <h1>{organisations}</h1>
                <h6>WSPARTYCH ORGANIZACJI</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className='organised-collections'>
                <h1>{collections}</h1>
                <h6>ZORGANIZOWANY ZBIÓREK</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
        </section>
    </>
}
export default YellowStatistics;