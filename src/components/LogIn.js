import React, {Component} from 'react';
import NavBar from './NavBar';
import Listings from './Listings';
import { Container, Button, TextField } from '@material-ui/core';

class LogIn extends Component {
  state = {
    username: '',
    password: '',
    logIn: false//would like to pull in from the store. 
  }

  handleText = e => {
    const state = {...this.state}
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  logIn = e => {
    e.preventDefault()
    document.cookie = 'logIn=true;max-age=60*5000'
    window.location.replace('/listings')
  }

  //make sure to pass the status
  render() {
    return this.state.logIn ? <Listings user={this.state.username} loggedIn={this.state.logIn}/> : (
      <div>
          <Container>
            <form className='logIn' onSubmit={this.logIn}>
              <TextField
                required
                onChange={this.handleText}
                value={this.state.username}
                name="username"
                label="*Username"
                type="text"/>
                <TextField
                  required
                  onChange={this.handleText}
                  value={this.state.password}
                  name="password"
                  label="*Password"
                  type="password"/>
                  <Button
                  type="submit"
                  className="logInBtn"
                  variant="contained"
                  color="primary">
                    Login
                  </Button>
            </form>
          </Container>
      </div>
    )
  }
}

export default LogIn;