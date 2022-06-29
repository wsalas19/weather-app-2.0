import React, {useState} from 'react';
import Cards from './Cards';
import SearchBar from './SearchBar';
import s from "./Home.module.css"
function Home()  {

    const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    console.log("search")
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=6cca0b71257862541d2991b6986410f0`).then(r=> r.json()).then((recurso)=>{
      if (recurso.main !== undefined) {
        const ciudad ={
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
        setCities(oldCities => [...oldCities, ciudad]);
      }else{
        alert("City not found")
      }
    });
  }

  function onClear() {
    console.log("clear")
    setCities([]);
  }
  
  function onClose(keyNumber) {
  console.log("close")
  let array1 = cities.filter(c => c.id !== keyNumber);
  setCities(array1);
  
  }

  let nothing = <div className={s.nothing}><h1>No cities to show.</h1></div>



    return ( 

           <div>
                <SearchBar onClear={onClear} onSearch={onSearch} />
                {cities.length===0 || cities === undefined? nothing : <Cards cities={cities} onClose={onClose} />
 }
           </div> 



     );
}

export default Home;