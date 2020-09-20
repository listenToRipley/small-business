import React from 'react';
import './index.css';
import Router from './Routes';
import {BrowserRouter} from 'react-router-dom';
import NavBar from './components/NavBar';
import {Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <NavBar/>
        <Router/>
    </BrowserRouter>
  </Provider>
  )
}

export default App