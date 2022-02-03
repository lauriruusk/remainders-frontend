import React from 'react';
import { Card } from 'react-bootstrap';

<<<<<<< HEAD
=======
<<<<<<< HEAD
const DCard = ({ rm }) => (
  <div>
    {/* <p>{rm}</p> */}
    <Card>
      <Card.Body>
        <Card.Title>{rm.to}</Card.Title>
        <Card.Subtitle>{rm.title}</Card.Subtitle>
        <Card.Text>{rm.message}</Card.Text>
        <Card.Text>{rm.updated_at}</Card.Text>
=======
>>>>>>> tests2
// muistutuskortti. 
const DCard = ({ rm, idx }) => (
  <div>
    <Card>
      <Card.Body>
        <Card.Text className="text-center">
          {idx + 1}
          .
        </Card.Text>
        <Card.Text>
          <strong>Vastaanottaja:</strong>
          {' '}
          {rm.to}
        </Card.Text>
        <Card.Text>
          <strong>Aihe:</strong>
          {' '}
          {rm.title}
        </Card.Text>
        <Card.Text>
          <strong>Muistutus:</strong>
          <br />
          {' '}
          {rm.message}
        </Card.Text>
        <Card.Text>
          <strong>Generoitu:</strong>
          {' '}
          {rm.updated_at}
        </Card.Text>
<<<<<<< HEAD
=======
>>>>>>> f46cfdca6e1a0000d21f91f51778076e7661d2b6
>>>>>>> tests2
      </Card.Body>
    </Card>
  </div>
);

export default DCard;
