import React from 'react';
import {Container, Paper} from '@material-ui/core';
import './componentcss.css'

const Business = (props) => {
  const id = props.match.params.id.substring(1)
  const business = props.businesses.find(b => b.id === id)

  return (
    <Container maxWidth="sm" className="businessContainer">
        <Paper className="businessPaper">
            <h2 className="businessInfoItem">{business.name}</h2>
            <h4 className="businessInfoItem">{business.address}</h4>
            <h4 className="businessInfoItem">{business.hours}</h4>
            <p className="businessInfoItem">{business.description}</p>
        </Paper>
    </Container>
)
}

export default Business