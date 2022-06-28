import React from 'react';
import styles from "./SearchBar.module.css"


function SearchBar({onSearch}) {
    return <div>
        <input className="inputSb" type="text" placeholder="city.." />
        <button className="searchButton" onClick={onSearch}>Search</button>
    </div>;
}

export default SearchBar;