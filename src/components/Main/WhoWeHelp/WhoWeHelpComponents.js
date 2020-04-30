import React from 'react';

const whoWeHelpComponents=({list, fundations, organisations, collections, desc})=>{
if(list==='fundations'){     
        return<>
            <nav className='whoWeHelp-nav'>
                <div className='fundations  list'>
                    <h2>{desc[0]}</h2>
                    <div className='fundationList'>
                        {fundations.map((el,i)=>{
                            return(<>
                                <div key={i} className='all-collections'>
                                    <div>
                                        <h1>Fundacja “{el.header}”</h1>
                                        <small>{el.subheader}</small>
                                    </div>
                                    <p>Cel i misja: {el.desc}.</p>
                                </div>
                            </>)
                        })}
                    </div> 
                </div>
            </nav>
        </>
        }else if(list==='organisations'){
            return<>
                <nav className='whoWeHelp-nav'>
                    <div className='organisations list'>
                        <h2>{desc[1]}</h2>
                        <div className='organisationsList'>
                        {organisations.map((el,i)=>{
                            return(<>
                                <div key={i} className='all-collections'>
                                    <div>
                                        <h1>Organizacja “{el.header}”</h1>
                                        <small>{el.subheader}</small>
                                    </div>
                                    <p>Cel i misja: {el.desc}.</p>
                                </div>
                            </>)
                        })}
                        </div>
                    </div>
                </nav>
            </>;
        }else if(list==='collections'){
            return<>
                <nav className='whoWeHelp-nav'>
                    <div className='collections list'>
                        <h2>{desc[2]}</h2>
                        <div className='collectionsList'>
                        {collections.map((el,i)=>{
                            return(<>
                                <div key={i} className='all-collections'>
                                    <div>
                                        <h1>Zbiórka “{el.header}”</h1>
                                        <small>{el.subheader}</small>
                                    </div>
                                    <p>Cel i misja: {el.desc}.</p>
                                </div>
                            </>)
                        })}          
                        </div>
                    </div>
                </nav>
            </>;
        }else{
            return<h1>Error, something went wrong :(</h1>;
        }
}
export default whoWeHelpComponents;