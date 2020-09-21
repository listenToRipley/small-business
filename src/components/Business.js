import React, { Fragment } from 'react';
import {Container, Paper} from '@material-ui/core';
import './componentcss.css'
import CookieReader from './CookieReader';

const Business = (props) => {
    const businessId = props.match.params.id.substring(1)
    const business = props.businesses.find((b) => b.id === businessId)

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