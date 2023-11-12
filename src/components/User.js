import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function User({el}) {
  return (
    <div>
      <Card className='cards' style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>{el.phone}</ListGroup.Item>
        <ListGroup.Item>{el.name}</ListGroup.Item>
        <ListGroup.Item>{el.website}</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  )
}

export default User
