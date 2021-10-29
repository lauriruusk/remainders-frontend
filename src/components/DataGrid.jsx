/* eslint-disable react/no-array-index-key */
import { React } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DCard from './DCard';

const DataGrid = ({ rem }) => (
  <div>
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {rem.map((r, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <Col key={idx}>
            <DCard rm={r} idx={idx} />
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

export default DataGrid;
