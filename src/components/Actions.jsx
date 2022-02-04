import React from 'react';
import {
  Container, Col, Row,
} from 'react-bootstrap';
import LoginForm from './LoginForm';
import AlertForm from './AlertForm';

// Actions-komponentti. sisältää kirjautumisen virhe/onnistumisilmoituksen ja varsinaisen kirjautumisikkunan
const Actions = ({
  hLog, setUsername, setPass, user, show, setShow, success, loginMsg
}) => (
  <Container id="actionform">
    <Row>
      {show === true && <AlertForm setShow={setShow} success={success} loginMsg={loginMsg} />}
    </Row>
    <Row>
      <Col>
        {user === null && <LoginForm hLog={hLog} setUsername={setUsername} setPass={setPass} />}
      </Col>
    </Row>
  </Container>
);

export default Actions;