//add business 
//delete business 
//login

export const logIn = (status) => {
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