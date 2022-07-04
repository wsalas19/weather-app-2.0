import React,{useState} from 'react';
import {Routes, Route} from "react-router-dom"
import './App.css';
import Nav from './components/Nav';
import City from './components/City';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  
  const [cities, setCities] = useState([]);
  const [city,setCity] = useState("")

  function onSearch(ciudad) {
    console.log("search")
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=6cca0b71257862541d2991b6986410f0&units=metric`).then(r=> r.json()).then((recurso)=>{
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
          longitud: recurso.coord.lon,
          country: recurso.sys.country
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
  
  function onClose(cardKey) {
  console.log(cardKey)
  let array1 = cities.filter(c => c.id !== cardKey);
  setCities(array1);
  
  }


 function getCityDetail(cityId) {
    let targetCity = cities.filter(c=>c.id=== parseInt(cityId));
    if (targetCity.length > 0) {
      setCity(targetCity[0]);
    } else{
      return null;
    }
  } 

  return (
  <div className='App'>
    <Nav/>

    <Routes>
      <Route exact path="/" element={<Home onClear={onClear} onClose={onClose} onSearch={onSearch} cities={cities}/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/city/:cityId" element={<City city={city} getCityDetail={getCityDetail}/>}/>
  

    </Routes>
  
    <Footer/>
  </div>
  )
  
}

export default App;
