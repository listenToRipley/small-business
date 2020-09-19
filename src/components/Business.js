import React from 'react';
import {Container, Paper} from '@material-ui/core';

const Business = (props) => {
 
    console.log('business props :', props)
    const id = props.match.params.id.substring(1)

    console.log('it is : ', typeof id, ' and it is :', id)
  const business = props.businesses.find(b => b.id === id)

  return (
    <Container maxWidth="sm" className="business-container">
        <Paper className="business-paper">
            <h2>{business.name}</h2>
            <h4>{business.address}</h4>
            <h4>{business.hours}</h4>
            <p>{business.description}</p>
        </Paper>
    </Container>
)
}

export default Business