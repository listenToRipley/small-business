
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import green from '@material-ui/core/colors/green'

const primary = green[500]

//for pre login - add links - Listings and login
//for post ling - add links  - Listings, add and logout - have this based on the login status

const NavBar = () => {
  return (
    <AppBar position="static">
      <ToolBar color="primary">
        <Typography variant="subtitle1" color="inherit">Small Business</Typography>
        <ul>
          <li className='navLi'>
          <Link to='/Listings'>Listings</Link>
          </li>
          <li className='navLi'>
          <Link to='/'>Login</Link>
          </li>
        </ul>
      </ToolBar>
    </AppBar>
  )
}

//logout should looks like: 

// return (
//   <AppBar position="static">
//     <ToolBar>
//       <Typography variant="subtitle1" color="inherit">Small Business</Typography>
//       <ul>
//         <li className='navLi'>
//         <Link>Listings</Link>
//         </li>
//         <li className='navLi'>
//         <Link>Add</Link>
//         </li>
//         <li className='navLi'>
//         <Link>LOGOUT</Link>
//         </li>
//       </ul>
//     </ToolBar>
//   </AppBar>
// )

export default NavBar;