import React from 'react';
import './index.css';
import Router from './Routes';
import {BrowserRouter} from 'react-router-dom';
import NavBar from './components/NavBar';

const App = () => {
  return (
   
      <BrowserRouter>
      <NavBar/>
        <Router/>
    </BrowserRouter>
  
  )
}

export default App