import React, {Component, useState} from 'react';
import NavBar from './components/NavBar';
import { Button, TextField , Card, CardContent } from '@material-ui/core';
import './App.css';
import Listings from './components/Listings'

//need to pass in the status from the original state

class LogIn extends Component {
  state = {
    logInStatus: false,
    username: '',
    password:''
  }

  handleText = (e) => {
    const newState = {...this.state}
    newState[e.target.id] = e.target.value
    this.setState(newState)
  }
    // e.preventDefault();
     //console.log(this.state)
 
  //    if (this.username === '') {
  //      alert(`You haven't entered a username yet`) 
  //    } else if (this.password === '') {
  //      alert(`You must have a password`)
  //    } else if (username !== '' && password !== '') {
  //    this.setState({
  //      loggedIn: !this.state.loggedIn,
  //    })
  //  }
  //    console.log(this.state)
  //  };
 
  //  handleName = e => {
  //      this.setState({
  //        username: e.target.value,
  //      })
  //  }
 
  //  handlePassword = e => {
  //    this.setState({
  //      password: e.target.value
  //    })
  //  }
  
   render() {
    return loggedIn ? <Listings user={username}/> : (
      <div>
        <NavBar/>
          <Card className="logInCard">
            <CardContent>
               <TextField label="Username *" />
               <br />
               <TextField type="password" id="outlined-password-input" label="Password *" />
               <br />
               <Button className="logInButton">Log In</Button>
            </CardContent>
          </Card>
      </div>
    )
   }
   }

export default LogIn;
