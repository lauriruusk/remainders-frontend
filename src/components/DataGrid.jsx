/* eslint-disable react/no-array-index-key */
<<<<<<< HEAD
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
            {/* <p>{r.title}</p> */}
            <DCard rm={r} />
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);
=======
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DCard from './DCard';

// tähän ruudukkoon tuodaan haetut muistutukset kortteina. mikäli muistutuksia ei jostain syystä
// saada tuotua, luo yhden kortin, jossa asiasta mainitaan
const DataGrid = ({ rem }) => {
  if (!Array.isArray(rem)) {
    return (
      <div>
        <Container>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <DCard rm={[{"to": "testivastaanottaja", "title": "testikortti", "message": "Jos näet tämän viestin, ohjelma ei saa dataa palvelimelta", "updated_at": new Date() }]} idx={0} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  return (
    <div>
      <Container className="cardContainer">
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
>>>>>>> f46cfdca6e1a0000d21f91f51778076e7661d2b6

export default DataGrid;
