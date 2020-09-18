import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
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

  toggleDialog = () => this.setState({ open: !this.state.open })

  handleTextChange = (e) => {
      const newState = { ...this.state }
      newState[e.target.id] = e.target.value
      this.setState(newState)
  }

  handleSubmit = (e) => {
      e.preventDefault()
      console.log('this payload length : ', ...this.props.totalBusinesses)
      const business = { ...this.state }
      business.id = this.props.totalBusinesses + 1
      delete business.open
      console.log("THE BUSINESS", business)
      this.props.addBusiness(business)
      this.setState({ open: false })
      console.log('did the id get created? ', business.id)
  }

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
          <h1 className='addBusinessTitle'>Add Business:</h1>
          <Button 
            variant='container'
            className='addBusiness'
            onClick={this.toggleDialog}
          >Add Business</Button>
        </div>
        <div>
          <Dialog open={this.state.open} onClose={this.toggleDialog}>
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
              <Button variant='contained' color='primary' type='submit'>Submit</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </Fragment>
    )
  }

}

export default AddBusiness