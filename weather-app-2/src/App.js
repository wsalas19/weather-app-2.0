
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';

function App() {
  return <>
  <SearchBar onSearch={()=>alert("search city")}/>

  <Card
     name={Cairns.name}
     max={Cairns.main.temp_max}
     min={Cairns.main.temp_min}
     img={`http://openweathermap.org/img/wn/${Cairns.weather[0].icon}@2x.png`}
     onClose={() => alert(Cairns.name)}
     />
  <br/>
  <Cards array={data} />
  </>
}

export default App;
