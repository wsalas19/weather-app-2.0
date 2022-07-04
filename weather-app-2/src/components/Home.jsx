import React from 'react';
import Cards from './Cards';
import SearchBar from './SearchBar';
import s from "./Home.module.css"
function Home({cities,onClose,onClear,onSearch})  {

  let nothing = <div className={s.nothing}><p>No cities to show.</p></div>

    return ( 

           <div>
                <SearchBar onClear={onClear} onSearch={onSearch} />
                {cities.length===0 || cities === undefined? nothing : <Cards cities={cities} onClose={onClose} />
 }
           </div> 



     );
}

export default Home;