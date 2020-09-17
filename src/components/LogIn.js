import React, {Component} from 'react';
import NavBar from './NavBar';
import Listings from './Listings';
import { Button, TextField , Card, CardContent } from '@material-ui/core';


const LogIn = (props) => {

  checkAuth = () => {
    const cookies = cookies.parse(document.cookie = 'logIn=true;max-age=60*5000')
    return cookies['logIn'] ? true : false 
  }

  clickHandler = (e) => {
   // e.preventDefault();
    //console.log(this.state)

    if (props.username === '') {
      alert(`You haven't entered a username yet`) 
    } else if (props.password === '') {
      alert(`You must have a password`)
    } else if (props.username !== '' && props.password !== '') {
    this.setState({
      loggedIn: !props.logIn,
    })
  }
    console.log(props)
  };

  handleName = e => {
      this.setState({
        username: e.target.value,
      })
  }

  handlePassword = e => {
    this.setState({
      password: e.target.value
    })
  }

  //make sure to pass the status
    return props.logIn ? <Listings user={ props.users.username} loggedIn={props.logIn}/> : (
      <div>
        <NavBar />
          <Card className="logInCard">
            <CardContent>
               <TextField onChange={handleName} label="Username *" />
               <br />
               <TextField onChange={handlePassword} type="password" id="outlined-password-input" label="Password *" />
               <br />
               <Button className="logInButton" onClick={clickHandler}>Log In</Button>
            </CardContent>
          </Card>
      </div>
    )
}

export default LogIn;