import React from 'react';
import {Container, Paper, Chip} from '@material-ui/core';
import Business from '' //where am I getting the business from? 

const Business = (props) => {
  const id = props.match.params.id
  const business = props.businesses.find(b => b.id === id)

  return (
    <Container maxWidth="sm" className="car-container">
        <Paper className="car-paper">
            <h2>{car.name}</h2>
            {
                Object.keys(business).map((key, idx) => {
                    return <Chip label={`${key}: ${business[key]}`}></Chip>
                })
            }
        </Paper>
    </Container>
)
}