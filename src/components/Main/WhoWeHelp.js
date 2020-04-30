import React,{useState, useEffect} from 'react';
import decoration from '../../assets/Decoration.svg';
import WhoWeHelpComponents from './WhoWeHelp/WhoWeHelpComponents';
import Pagination from './WhoWeHelp/Pagination';

const WhoWeHelp=()=>{
    const [list, setList] = useState('fundations');
    const [description, setDescription] = useState([]);
    const [fundations, setFundations] = useState([]);
    const [organisations, setOrganisations] = useState([]);
    const [collections, setCollections] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [divPerPage] = useState(3);

    const handleCollectionButtons=(value)=>{
        setList(value);
        setCurrentPage(1);
    }

    useEffect(() => {
        fetch("http://localhost:3001/WeHelp")
            .then(res => res.json())
            .then(data=>{
                setFundations(data[0].items);
                setOrganisations(data[1].items);
                setCollections(data[2].items)
                for(const el of data){
                    setDescription(PrevState =>[...PrevState,el.desc])
                }
                
            })
    }, [])

    const indexOfLastDiv = currentPage * divPerPage;
    const indexOfFirstDiv = indexOfLastDiv - divPerPage;
    const currentFundation = fundations.slice(indexOfFirstDiv,indexOfLastDiv);  
    const currentOrganisation = organisations.slice(indexOfFirstDiv,indexOfLastDiv);
    const currentCollection = collections.slice(indexOfFirstDiv,indexOfLastDiv);
    
    const paginate=(pageNumber)=>{
        setCurrentPage(pageNumber);
    }

    return<>
        <section className='whoWeHelp container' id='whoWeHelp'>
            <div className='whoWeHelp-intro'>
                <h1>Komu pomagamy?</h1>
                <img src={decoration} alt='decoration'/>
                <div className='whoWeHelp-three-btns'>
                    <button onClick={e=>handleCollectionButtons(e.target.value)} value='fundations'>Fundacjom</button>
                    <button onClick={e=>handleCollectionButtons(e.target.value)} value='organisations'>Oraganizacjom<br/>pozarządowym</button>
                    <button onClick={e=>handleCollectionButtons(e.target.value)} value='collections'>Lokalnym<br/>zbiórkom</button>
                </div>
            </div>
            <WhoWeHelpComponents
                list={list}
                fundations={currentFundation}
                organisations={currentOrganisation}
                collections={currentCollection}
                desc={description}/>
            <Pagination
                divPerPage={divPerPage}
                totalFundationDivs={fundations.length}
                totalOrganisationsDivs={organisations.length}
                totalCollectionsDivs={collections.length}
                paginate={paginate}
                list={list}/>
        </section>
    </>
}
export default WhoWeHelp;