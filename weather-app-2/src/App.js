
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import data, { Cairns } from './data.js';

function App() {
  return (
  <div className='App'>
    <Nav onSearch={()=>alert("city search")}/>
    <h1>Hola Mundo!</h1>

  
  </div>
  )
  
}

export default App;
