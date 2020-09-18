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

export const findBusiness = (index) => {
  return{
    type: 'FIND_BUSINESS',
    value: index
  }
}

export const addUser = (users) => {
  return{
    type: 'ADD_USER',
    value: users
  }
}