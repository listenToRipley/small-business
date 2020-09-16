
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

//need to add links - Listings, add and logout

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