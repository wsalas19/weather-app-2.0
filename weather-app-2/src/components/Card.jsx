import React from 'react';
import s from "./Card.module.css"

function Card({name,max,min,img,onClose}) {
    return (  
        <div className={s.card}>

            <div className={s.head}>
                <button className={s.close} onClick={onClose}>X</button>
                <h1>{name}</h1>
            </div>
            <div className={s.info}>
                <h3>Max:{max}</h3>
                <h3>Min:{min}</h3>
                <img className="cardImage" src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="weather-description" />
            </div>

        </div>
    );
}

export default Card;