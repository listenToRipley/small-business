import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'


//maybe description should be a text box and not field? want to add a character limit? 
class AddBusiness extends Component {
  state = {
    open: false, 
    id:'', //this should be the length of the state + 1 
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
      const payload = { ...this.state }
      payload.id = this.props.businessTotal + 1 //businessTotal doesn't currently exist 
      delete payload.open
      console.log("THE BUSINESS", payload)
      // add this.props.addCar function here
      // also add this.setState to close the dialog
      this.props.AddBusiness(payload)
      this.setState({ open: false })
  }

  //this needs work 
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.open !== this.state.open) {
      this.setState({
        'name': '',
        'address': '',
        'hours': '',
        'description': ''
      })
    }
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