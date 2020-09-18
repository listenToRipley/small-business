import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import cookie from 'cookie';
import LogIn from './components/LogIn';
import AddBusiness from './containers/AddBusiness'; //will need to change to containers
import Listings from './containers/Listings'; //will need to change containers 
import Business from './components/Business' //would like the route to update with the vendor's name, think about that. 

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies['loggedIn'] ? true : false 
  }

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
      <Route
          {...rest}
          render={(props) => checkAuth() ? <Component {...props}/> : <Redirect to={{pathname:'/'}}/> }
      />
  )
}
  
const Router = () => {

    return (
        <Switch>
            <Route exact path="/" component={LogIn} />
            <Route path="/listings" component={Listings} />
            <Route path="/business/:name" component={Business} /> 
            <ProtectedRoute path="/add_business" component={AddBusiness}/>
        </Switch>
    );
};

export default Router;