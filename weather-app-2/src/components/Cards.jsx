import Card from "./Card";

function Cards({array}) {
    return <div>
      {array.map(city=>{
        return(
        <Card
            key={array.indexOf(city)}
            name={city.name}
            max={city.main.temp_max}
            min={city.main.temp_min}
            img={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
            onClose={() => alert(city.name)}
        />
        )})}
            </div>
}

export default Cards;