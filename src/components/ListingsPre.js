import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'

//use the pre navbar 

const ListingsPre = (props) => {
  return (
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
          {props.businesses.map((business, index) => (
            <TableRow key={index}>
              <TableCell>{business['name']}</TableCell>
              <TableCell>{business['description']}</TableCell>
              <TableCell>{business['hours']}</TableCell>
              <TableCell>{business['address']}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  )
}

export default ListingsPre