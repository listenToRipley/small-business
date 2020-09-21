import React, { Fragment } from 'react';
import {Container, Paper} from '@material-ui/core';
import './componentcss.css'
import CookieReader from './CookieReader';

const Business = (props) => {
    const businessId = props.match.params.id.substring(1)
    const business = props.businesses.find((b) => b.id === businessId)
    console.log('here is the id we received :', businessId,'we are receiving this array of businesses : ' ,props.businesses, ' and the business we get back now is : ', business )

  return (
    <Fragment>
        <CookieReader/>
        <Container maxWidth="sm" className="businessContainer">
            <Paper className="businessPaper">
                <h2 className="businessInfoItem">{business.name}</h2>
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