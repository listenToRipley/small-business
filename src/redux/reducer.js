import { combineReducers} from 'redux'

const loggedIn = (state = false) => state

const businesses = (state = [], action) => {
  switch(action.type) {
    case 'ADD_BUSINESS':
      return [...state, action.value]
    case 'FIND_BUSINESS': 
    const business = [...state]
    business.filter(index ==> business.id === index)
      return business
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

export default combineReducers({loggedIn, businesses, users})