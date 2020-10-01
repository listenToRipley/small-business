import { combineReducers} from 'redux'

const loggedIn = (state = false) => state

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

const mapAPI = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_MAP': 
      return action.value
    case 'FIND_BUSINESS': 
    //this will need out, since we have to determine the input 
      return action.value
  }
  
}

export default combineReducers({loggedIn, businesses, users})