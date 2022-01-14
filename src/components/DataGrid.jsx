/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DCard from './DCard';

const DataGrid = ({ rem }) => {
  if (!Array.isArray(rem)) {
    return (
      <div>
        <Container>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <DCard rm={['']} idx={0} />
            </Col>

          </Row>
        </Container>
      </div>
    );
  }
  return (
    <div>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {rem.map((r, idx) => (
            <Col key={idx}>
              <DCard rm={r} idx={idx} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default DataGrid;
