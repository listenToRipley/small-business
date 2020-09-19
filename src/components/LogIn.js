import React, {Component} from 'react';
import Listings from './Listings';
import { Container, Button, TextField } from '@material-ui/core';

class LogIn extends Component { 
  state = {
    username: '',
    password: '',
    loggedIn: false//would like to pull in from the store. 
  }

  handleText = e => {
    const state = {...this.state}
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  loggedIn = e => {
    e.preventDefault()
    document.cookie = `loggedIn=true;max-age=60*100000;username=${this.state.username}`
    window.location.replace('/listings')
  }

  //make sure to pass the status
  render() {
    return this.state.loggedIn ? <Listings user={this.state.username} loggedIn={this.state.loggedIn}/> : (
      <div>
          <Container>
            <form className='loggedIn' onSubmit={this.loggedIn}>
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
                  className="loggedInBtn"
                  variant="contained"
                  color="primary"
                  username={this.state.username}>
                    Login
                  </Button>
            </form>
          </Container>
      </div>
    )
  }
}

export default LogIn;