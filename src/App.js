import logo from './logo.svg';
import './App.css';
import React from "react";
import {  Switch,   Route,  Link} from "react-router-dom";
import { useState } from 'react';

import Home from './WeeklyTask10/Home'
import Contact from './WeeklyTask10/Contact'
import About from './WeeklyTask10/About'
import Login from './WeeklyTask10/Login'





function App() {

 

  return (
    <div className="App">

    <div id="navbar">  
      <nav>       
            
              
            <Link to ="/login "className="navDetails">LOGIN </Link>
              <Link to ="/contact " className="navDetails">CONTACT </Link>
            <Link to ="/about" className="navDetails"> ABOUT</Link> 
                <Link to ="/home" className="navDetails">HOME</Link> 
         
      
      </nav>
    </div>
     


      <Route  path="/home">
        <Home />
      </Route>
      <Route  path="/about">
        <About/>
      </Route>
      <Route  path="/contact ">
        <Contact />
      </Route>
      <Route  path="/login ">
        <Login />
      </Route>
 
    </div>
  );
}

export default App;
