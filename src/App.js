import React from 'react';
import './index.css';
import Router from './Routes';
import {BrowserRouter} from 'react-router-dom';
import {Provider } from 'react-redux';
import store from './redux/store';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Provider st0re={store}>
    <BrowserRouter>
      <NavBar>
        <Router/>
      </NavBar>
    </BrowserRouter>
   </Provider>
  )
}

export default App