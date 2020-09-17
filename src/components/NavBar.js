
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Routes, Link} from 'react-router-dom';


//for pre login - add links - Listings and login
//for post ling - add links  - Listings, add and logout - have this based on the login status

const NavBar = (props) => {

  return (
  <AppBar position="static" style={{background: '#3bb371'}}>
    <ToolBar>
      <Typography variant="subtitle1">Small Business</Typography>
    </ToolBar>
  </AppBar>
)
  // if(props.loggedIn === false) {
  //   return (
  //     <AppBar position='relative'>
  //       <ToolBar color={primary} >
  //         <Typography>Small Business</Typography>
  //         <ul className='nav-list'>
  //         <li className='nav-list-item'>
  //           <Link to='/listings'>Listings</Link>
  //         </li>
  //         <li className='nav-list-item'>
  //           <Link exact to='/'>LogIn</Link>
  //         </li> 
  //       </ul>
  //       </ToolBar>
  //     </AppBar>
  //   )
  // } else {
  //   return (
  //    <AppBar position='relative'>
  //     <ToolBar color={primary} >
  //         <Typography>Small Business</Typography>
  //       </ToolBar>
  //       <ul className='nav-list'>
  //         <li className='nav-list-item'>
  //           <Link to='/listings'>Listings</Link>
  //         </li>
  //         <li className='nav-list-item'>
  //           <Link to='/add_business'>Add Business</Link>
  //         </li>
  //         <li className='nav-list-item'>
  //           <Link exact to='/'>LogOut</Link>
  //         </li> 
  //       </ul>
  //     </AppBar>
  //   )
  // }
}

//logout should looks like: 

export default NavBar;