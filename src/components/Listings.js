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
import cookie from 'cookie';
import { Link } from 'react-router-dom'
import './componentcss.css'

//Update this to assess the login status, if true, show the option to delete, otherwise, don't show 
//include a user greeting before the table 

const Listings = (props) => {
  const cookies = (cookie.parse(document.cookie))
  const status = cookies[Object.keys(cookies)]==='true'
  console.log('props :',props)
 
    return (
      <div>
      {status ? 
      <h6>Logged in as : {props.username}</h6> : null
      }
        <Container maxWidth='lg' className='listingContainer'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Hours</TableCell>
              <TableCell>Address</TableCell>
              {status? 
              <TableCell>Action</TableCell> : null
              }
            </TableRow>
          </TableHead>
          <TableBody>
          {props.businesses.map((business) => {
              return (
              <TableRow key={business.id}>

                <TableCell component='th' scope='row'>
                  <Link to={`/business/:${business.id}`}>{business['name']}</Link>
                </TableCell>
                <TableCell>{business['description']}</TableCell>
                <TableCell>{business['hours']}</TableCell>
                <TableCell>{business['address']}</TableCell>
                   {/* need to work on the conditionals here */}
              {status && business.length < 1 ? 
              <TableCell><DeleteBusiness deleteBusiness={props.deleteBusiness} index={business.id}/></TableCell> : null}
              </TableRow>
            )
            })}
          </TableBody>
        </Table>
      </Container>
      </div>
    )
}

export default Listings