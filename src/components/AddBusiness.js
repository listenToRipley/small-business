import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    DialogContent,
    DialogTitle
} from '@material-ui/core';
import Business from '../containers/Business';

//do I need to add something if the login is false to stop from routing? 
//maybe description should be a text box and not field? want to add a character limit? 
class AddBusiness extends Component {
  state = {
    open: false, 
    name: '',
    address: '',
    hours: '',
    description: ''
  }

  handleTextChange = (e) => {
      const newState = { ...this.state }
      newState[e.target.id] = e.target.value
      this.setState(newState)
  }

  handleSubmit = (e) => {
      e.preventDefault()
      const payload = { ...this.state }
      payload.id = this.props.businesses.length ? this.props.businesses.length > 0 : this.props.businesses.length 
      delete payload.open
      console.log("THE BUSINESS", payload)
      this.props.addBusiness(payload)
      this.setState({ open: false })
  }

  //reset not working
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.open !== this.state.open) {
      this.setState({
        'name': '',
        'address': '',
        'hours': '',
        'description': ''
      })
    }
    console.log(this.state)
  }

  render() {
    return(
      <Fragment>
        <div>
            <DialogTitle>Add Business</DialogTitle>
            <DialogContent>
              <form
              onSubmit={this.handleSubmit}
              className='addBusinessForm'>
              <TextField
                id='name'
                placeholder='Business Name'
                value={this.state.name}
                onChange={this.handleTextChange}
                required
              />
                <TextField
                id='address'
                placeholder='Address'
                value={this.state.address}
                onChange={this.handleTextChange}
                required
              />
                <TextField
                id='hours'
                placeholder='Business Hours'
                value={this.state.hours}
                onChange={this.handleTextChange}
              />
                <TextField
                id='description'
                placeholder='Business Description'
                value={this.state.description}
                onChange={this.handleTextChange}
                required
              />
              <Button variant='contained' color='primary' type='submit' onClick={this.state.open=false}>SAVE</Button>
              </form>
            </DialogContent>
        </div>
      </Fragment>
    )
  }

}

export default AddBusiness