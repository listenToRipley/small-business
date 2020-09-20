import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './componentcss.css'
import cookie from 'cookie'

const cookies = (cookie.parse(document.cookie))
const status = JSON.parse(cookies.businessCookies)

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      loggedIn: status.loggedIn
    }
  }

  handleClick = (e) => {
    this.setState({
      loggedIn: status.loggedIn = false
    })
  }

render() {
  return (
    <AppBar position='static' style={{background: '#3bb371'}}>
      <ToolBar>
  
        <Typography variant='h6' style={{flexGrow: '1'}}>Small Business</Typography>
  
        <ul className='navList'>
        
          <li className='navListItem'>
            <Link to='/listings'>Listings</Link>
          </li>
          
          {this.state.loggedIn===true ?
          <div>
          <li className='navListItem'>
              <Link to='/add_business'>Add Business</Link>  
            </li>
            
            <li className='navListItem'>
              <Link onClick={this.handleClick} to='/'>Log Out</Link>  
            </li>
          </div>
          : 
          <li className='navListItem'>
            <Link to='/'>Log In</Link> 
          </li>}
         
        </ul>
        
      </ToolBar>
    </AppBar>
  )
}
  } 

//do I need to reset the cookie? 
export default NavBar;