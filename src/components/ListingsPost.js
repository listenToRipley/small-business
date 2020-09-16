import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import NavBar from './NavBarPost'

//use the same content as the ListingPre, but use the NavBarPost and add a delete option to the list 
//include a user greeting before the table 

const ListingsPre = (props) => {
  return (
    <div>
      <NavBar/>
      <Container maxWidth='lg' className='listingContainer'>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.businesses.map((business, index) => (
            <TableRow key={index}>
              <TableCell>{business['name']}</TableCell>
              <TableCell>{business['description']}</TableCell>
              <TableCell>{business['hours']}</TableCell>
              <TableCell>{business['address']}</TableCell>
              <TableCell>{business['delete action not read yet']}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
    </div>
  )
}

export default ListingsPre