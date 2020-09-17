
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import './componentcss.css'
import cookie from 'cookie'

//for pre login - add links - Listings and login
//for post ling - add links  - Listings, add and logout - have this based on the login status

const NavBar = (props) => {

  if (cookie.parse(document.cookie) === 'logIn=true') {
    return (
      <AppBar position='static' style={{background: '#3bb371'}}>
        <ToolBar>
    
          <Typography variant='h6' style={{flexGrow: '1'}}>Small Business</Typography>
    
          <ul className='navList'>
          
            <li className='navListItem'>
              <Link to='/listings'>Listings</Link>
            </li>

            <li className='navListItem'>
              <Link to='/add_business'>Add Business</Link>
            </li>
    
            <li className='navListItem'
              onClick={() => {
               document.cookie='logIn='
               window.location.replace('/')
              }}>
              <Link to='/'>Logout</Link>
            </li>
    
          </ul>
          
        </ToolBar>
      </AppBar>
    )
  } else {
    return (
      <AppBar position='static' style={{background: '#3bb371'}}>
        <ToolBar>
    
          <Typography variant='h6' style={{flexGrow: '1'}}>Small Business</Typography>
    
          <ul className='navList'>
          
            <li className='navListItem'>
              <Link to='/listings'>Listings</Link>
            </li>
    
            <li className='navListItem'
              onClick={() => {
               document.cookie='logIn='
               window.location.replace('/')
              }}>
              <Link to='/'>Login</Link>
            </li>
    
          </ul>
          
        </ToolBar>
      </AppBar>
    )

  }

}

//logout should looks like: 

export default NavBar;