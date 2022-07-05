import React,{useEffect} from 'react';
import s from "./Contact.module.css"
function Contact() {
    useEffect(() => {
        document.title = 'Contact';
      });

    return ( 
        <div className={s.contact}>
        <h2 className={s.title}>Contact Me!</h2>
        <form className={s.form} onSubmit={()=>alert("message has been sent, thanks for visiting my page! :)")}>
            <label>
            E-mail:
                <input type="email" placeholder='E-mail...'/>
            </label>
            <label>
            Message:
                <input className={s.message} type="text" placeholder='Share your thoughts.'/>
            </label>
            <input className={s.btn} type="submit" value="Submit " />
        </form>
        

    </div> );
}

export default Contact;