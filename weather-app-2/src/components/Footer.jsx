import React from 'react';
import {NavLink} from "react-router-dom"
import s from "./Footer.module.css"
import github from "../images/logo-github.svg"
import twitter from "../images/logo-twitter.svg"
import linkedin from "../images/logo-linkedin.svg"

function Footer() {
    return ( 
        <div className={s.footer}>
            <div className={s.nav}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className={s.socials}>
                <a href="https://github.com/wsalas19" target="_blank" rel='noreferrer' ><img className={s.img} src={github} alt="github-logo" /></a>
                <a href="https://www.linkedin.com/in/williamsalasb/" target="_blank" rel='noreferrer'><img className={s.img} src={linkedin} alt="linkedin-logo" /></a>
                <a href="https://twitter.com/wsalas1905" target="_blank" rel='noreferrer'><img className={s.img} src={twitter} alt="twitterlogo" /></a>
            </div>
        </div>

     );
}

export default Footer;