import React from 'react';
import { Card } from 'react-bootstrap';

const DCard = ({ rm, idx }) => (
  <div>
    <Card className="card-bground">
      <Card.Body className="yelloww">
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
        <Card.Text className="text-end">
          {idx + 1}
          .
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);

export default DCard;
