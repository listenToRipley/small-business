import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import cookie from 'cookie';
import LogIn from './components/LogIn';
import AddBusiness from './containers/AddBusiness'; 
import Listings from './containers/Listings'; 
import Business from './containers/Business';

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
            <Route path="/business/id" component={Business} /> 
            <ProtectedRoute path="/add_business" component={AddBusiness}/>
        </Switch>
    );
};

export default Router;