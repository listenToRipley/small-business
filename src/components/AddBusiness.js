import React, { Component, Fragment } from 'react'
import {
    Container,
    Paper,
    Button,
    TextField,
    DialogContent,
    DialogTitle
} from '@material-ui/core';
import CookieReader from './CookieReader'

class AddBusiness extends Component {
  state = {
    open: true, 
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
      const numOfBusinesses = this.props.businesses.length
      payload.id = numOfBusinesses+1
      delete payload.open
      // console.log("THE BUSINESS", payload)
      this.props.addBusiness(payload)
      this.setState({ 
          'name': '',
          'address': '',
          'hours': '',
          'description': ''
       })
    }

  render() {
    return(
      <Fragment>
      <CookieReader/>
      <DialogTitle>Add Business</DialogTitle>
        <div>
            <DialogContent className='addBusinessBody'> 
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
              <Button className='addBtn' variant='contained' color='primary' type='submit' >SAVE</Button>
              </form>
              <Container className='addMap'>
                <Paper>MAP</Paper>
             </Container>
            </DialogContent>
            
        </div>
      </Fragment>
    )
  }

}

export default AddBusiness