import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import data, { Cairns } from './data.js';

function App() {
  return (
  <div className='App'>
    <Nav/>
    <h1>Hola Mundo!</h1>
    <SearchBar onSearch={()=>alert("city search")}/>

  
  </div>
  )
  
}

export default App;
