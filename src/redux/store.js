import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import state from './state';
import thunk from 'redux-thunk';

export default createStore(reducer, state, applyMiddleware(thunk))