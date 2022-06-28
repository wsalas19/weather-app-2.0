import React from 'react';
import SearchBar from "./SearchBar";
import styles from "./Nav.modules.css"



function NavBar({onSearch}) {
    return(
    <div className={styles.bar}>
        <div className={styles.left}> <img src="####" alt="logo" /></div>
        <div className={styles.right}> <SearchBar onSearch={onSearch}/></div>
       

    </div>
    );
}

export default NavBar;