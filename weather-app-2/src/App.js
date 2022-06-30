import React from 'react';
import {Routes, Route} from "react-router-dom"
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
  <div className='App'>
    <Nav/>

    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
  

    </Routes>
  
  </div>
  )
  
}

export default App;
