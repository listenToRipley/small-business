import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import LogIn from './components/LogIn';
import AddBusiness from './components/AddBusiness'; //will need to change to containers
import Listings from './components/Listings'; //will need to change containers 
import Business from './components/Business' //would like the route to update with the vendor's name, think about that. 

const checkAuth = () => {
    const cookies = cookies.parse(document.cookie = 'logIn=true;max-age=60*5000')
    return cookies['logIn'] ? true : false 
  }
  
const Router = () => {

    const ProtectedRoute = ({component: AddBusiness, ...rest}) => {
        return (
            <Route
                {...rest}
                render={(props) => checkAuth() ? <AddBusiness {...props}/> : <Redirect to="/"/> }
            />
        )
    }

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