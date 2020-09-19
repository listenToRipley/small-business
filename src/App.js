import React from 'react';
import './index.css';
import Router from './Routes';
import {BrowserRouter} from 'react-router-dom';
import NavBar from './components/NavBar';
import CookieReader from '../src/components/CookieReader'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
        <CookieReader/>
        <Router/>
    </BrowserRouter>
  )
}

export default App