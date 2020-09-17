import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import DeleteBusiness from './DeleteBusiness'
import cookie from 'cookie'

//Update this to assess the login status, if true, show the option to delete, otherwise, don't show 
//include a user greeting before the table 

const Listings = (props) => {
  console.log(document.cookie)
 
  if (document.cookie === 'loggedIn=true') {
    return (
      <div>
        <Container maxWidth='lg' className='listingContainer'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Hours</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {props.businesses.map((business, index) => {
              return (
              <TableRow key={business.id}>
                <TableCell>{business['name']}</TableCell>
                <TableCell>{business['description']}</TableCell>
                <TableCell>{business['hours']}</TableCell>
                <TableCell>{business['address']}</TableCell>
                <TableCell><DeleteBusiness deleteBusiness={props.deleteBusiness} index={props.business.id}/></TableCell>
              </TableRow>
            )
            })}
          </TableBody>
        </Table>
      </Container>
      </div>
    )
  } else  {
    return (
      <div>
        <Container maxWidth='lg' className='listingContainer'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Hours</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.businesses.map((business, index) => {
              return (
              <TableRow key={business.id}>
                <TableCell>{business['name']}</TableCell>
                <TableCell>{business['description']}</TableCell>
                <TableCell>{business['hours']}</TableCell>
                <TableCell>{business['address']}</TableCell>
              </TableRow>
            )
            })}
          </TableBody>
        </Table>
      </Container>
      </div>
    )
  }
}

export default Listings