import { combineReducers} from 'redux'

const logIn = (state = false) => state

const businesses = (state = [], action) => {
  switch(action.type) {
    case 'ADD_BUSINESS':
      return [...state, action.value]
    case 'DELETE_BUSINESS':
      const businesses = [...state]
      businesses.splice(action.value, 1)
      return businesses
    default:
      return state
  }
}

const users = (state = [], action) => {
 switch(action.type) {
   case 'ADD_USER':
     return action.value
    default:
      return null 
 }
}

export default combineReducers({logIn, businesses, users})