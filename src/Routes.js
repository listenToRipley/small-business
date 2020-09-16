import React from 'react';
import { Switch, Route } from 'react-router';
import LogIn from './LogIn';
import AddBusiness from './componentsAddBusiness'; //will need to change to containers
import Listings from './components/Listings'; //will need to change containers 
import Business from './components/Business' //would like the route to update with the vendor's name, think about that. 


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={LogIn} />
            <Route path="/add_business" component={AddBusiness} />
            <Route path="/listings" component={Listings} />
            <Route path="/business" component={Business} /> 
        </Switch>
    );
};

export default Router;