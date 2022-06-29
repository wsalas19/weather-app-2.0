import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import SearchBar from './components/SearchBar';
import data, { Cairns } from './data.js';
import {Routes, Route, Switch} from "react-router-dom"
import Home from './components/Home';

function App() {
  return (
  <div className='App'>
    <Nav/>

    <Routes>
      <Route exact path="/" element={<Home/>}/>
  

    </Routes>
  
  </div>
  )
  
}

export default App;
