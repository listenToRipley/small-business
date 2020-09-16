
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

//for pre login - add links - Listings and login
//for post ling - add links  - Listings, add and logout - have this based on the login status

const NavBar = () => {
  return (
    <AppBar position="static">
      <ToolBar>
        <Typography variant="subtitle1" color="inherit">Small Business</Typography>
      </ToolBar>
    </AppBar>
  )
}

export default NavBar;