import React from 'react';

const Pagination = ({ 
    divPerPage, 
    totalFundationDivs,
    totalOrganisationsDivs, 
    totalCollectionsDivs,
    list, 
    paginate }) => {
  
    const pageNumbers = [];
    let totalDivs = null;
    if (list==='fundations'){
        totalDivs = totalFundationDivs;
    }else if(list==='organisations'){
        totalDivs = totalOrganisationsDivs;
    }else{
        totalDivs = totalCollectionsDivs;
    }
    for (let i = 1; i <= Math.ceil(totalDivs / divPerPage); i++) {
        pageNumbers.push(i);
    }

    if(totalDivs<=3){
        return <>
        </>
    }else{
        return (
        <nav>
            <ul className='pages'>
            {pageNumbers.map(number => (
                <li key={number} className='page-number'>
                <a onClick={(e) => {
                    e.preventDefault()
                    paginate(number)
                }} href='!#' className='page-link'>
                    {number}
                </a>
                </li>
            ))}
            </ul>
        </nav>
        );
    };
}

export default Pagination;