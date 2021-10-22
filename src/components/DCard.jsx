import React from 'react';
import { Card } from 'react-bootstrap';

const DCard = ({ rm }) => (
  <div>
    {/* <p>{rm}</p> */}
    <Card>
      <Card.Body>
        <Card.Title>{rm.to}</Card.Title>
        <Card.Subtitle>{rm.title}</Card.Subtitle>
        <Card.Text>{rm.message}</Card.Text>
        <Card.Text>{rm.updated_at}</Card.Text>
      </Card.Body>
    </Card>
  </div>
);

export default DCard;
