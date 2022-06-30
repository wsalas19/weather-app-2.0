import React from 'react';
import {NavLink} from "react-router-dom"
import s from "./Nav.module.css"



function NavBar() {
    return(
    <div className={s.bar}>
        <div className={s.left}> <img className={s.cloud} src="https://icon-library.com/images/white-cloud-icon-png/white-cloud-icon-png-4.jpg" alt="logo" /> <h1 className={s.title}>Weather App</h1></div>
        <div className={s.right}> 
        

        <NavLink className={s.links} to="/"> Home</NavLink>
        <NavLink className={s.links} to="/about"> About </NavLink>
        
        </div>

    </div>
    );
}

export default NavBar;