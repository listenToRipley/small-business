import React from 'react';
import {Container, Paper} from '@material-ui/core';

const Business = (props) => {
    console.log('business props :', props)
  const id = props.business.params.id
    console.log('it is : ', typeof props.id, ' and it is :', props.id)
  const business = props.businesses.find(b => b.id === id)

  return (
    <Container maxWidth="sm" className="business-container">
        <Paper className="business-paper">
            <h2>Business Name : {business.name}</h2>
            <h2>Address{business.address}</h2>
            <h2>Hours {business.hours}</h2>
            <h2>Description{business.description}</h2>
        </Paper>
    </Container>
)
}

export default Business