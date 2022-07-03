import React from 'react';
import {Routes, Route} from "react-router-dom"
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
  <div className='App'>
    <Nav/>

    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
  

    </Routes>
  
    <Footer/>
  </div>
  )
  
}

export default App;
