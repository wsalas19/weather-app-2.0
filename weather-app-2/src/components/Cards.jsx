import Card from "./Card";
import React from 'react';
import s from "./Cards.module.css"


function Cards({cities,onClose}) {
    return <div className={s.cardcontainer}>
      {
        cities.map((city,i)=>{
          return <Card
          key={i} 
          id={city.id}
          name={city.name} 
          min={city.min} 
          max= {city.max} 
          img ={city.img} 
          onClose={onClose}
          />
        })
      }
            </div>
}

export default Cards;