export const loggedIn = (status) => {
  return {
    type: 'LOG_IN',
    value: status
  }
}

export const addBusiness = (business) => {
  return {
    type: 'ADD_BUSINESS',
    value: business 
  }
}

export const deleteBusiness = (index) => {
  return{
    type: 'DELETE_BUSINESS',
    value: index
  }
}

export const addUser = (users) => {
  return{
    type: 'ADD_USER',
    value: users
  }
}

const defaultMap = (data) => {
  return {
    type:'FETCH_MAP',
    value: data
  }
}

const createMap = (input) => {
  return {
    type: 'FIND_BUSINESS',
    value: input
  }
}

export const mapApi = (map) => {
  return (dispatch) => {
    fetch(`https://maps.google.com/maps/api/geocode/json?key=<${process.env.REACT_APP_GOOGLE_MAP_API_KEY}>&address=1600+Amphitheatre+Parkway,+Mountain+View,+CA`)
  .then(res => res.json())
  .then(data => {
    dispatch({
      defaultMap, createMap
    })
  })
  }
}