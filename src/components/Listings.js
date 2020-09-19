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
import CookiesReader from './CookieReader'

const Listings = (props) => {
  const cookies = (cookie.parse(document.cookie))
  const status = JSON.parse(cookies.businessCookies)
 
    return (
      <div>
        <CookiesReader/>
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
          {props.businesses.map((business, index) => {
              return (
              <TableRow key={business.id}>

                <TableCell component='th' scope='row'>
                  <Link to={`/business/:${business.id}`}>{business['name']}</Link>
                </TableCell>
                <TableCell>{business['description']}</TableCell>
                <TableCell>{business['hours']}</TableCell>
                <TableCell>{business['address']}</TableCell>
              {status && (
              <TableCell>
              <DeleteBusiness deleteBusiness={props.deleteBusiness} 
              index={index}/>
              </TableCell>
              )}
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