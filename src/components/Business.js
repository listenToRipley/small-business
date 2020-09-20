import React, { Fragment } from 'react';
import {Container, Paper} from '@material-ui/core';
import './componentcss.css'
import CookieReader from './CookieReader';

const Business = (props) => {
    console.log('business props',props.businesses)
  const businessId = props.match.params.id.substring(1)
  console.log('id is: ', businessId)
  const business = props.businesses.find( id => id === businessId)
  console.log('THE BUSINESS IS', business)

  return (
    <Fragment>
        <CookieReader/>
        <Container maxWidth="sm" className="businessContainer">
            <Paper className="businessPaper">
                <h2 className="businessInfoItem">BUSINESS NAME{business.name}</h2>
                <h4 className="businessInfoItem">{business.address}</h4>
                <h4 className="businessInfoItem">{business.hours}</h4>
                <p className="businessInfoItem">{business.description}</p>
                <div className="map">   MAP</div>
            </Paper>
        </Container>
    </Fragment>
)
}

export default Business