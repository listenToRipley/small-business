import React from 'react';
import { Switch, Route } from 'react-router';
import LogIn from './LogIn';
import AddBusiness from './containers/AddBusiness';
import ListingsPost from './containers/ListingsPost';
import ListingsPre from './components/ListingsPre';
import Business from './containers/Business' //would like the route to update with the vendor's name, think about that. 


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={LogIn} />
            <Route path="/add_business" component={AddBusiness} />
            <Route path="/post_login_listings" component={ListingsPost} />
            <Route path="/pre_login_listings" component={ListingsPre} />
            <Route path="/business" component={Business} /> 
        </Switch>
    );
};

export default Router;