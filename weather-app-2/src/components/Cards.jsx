import Card from "./Card";

function Cards({array,onClose}) {
    return <div>
      {
        array.map((city,i)=>{
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