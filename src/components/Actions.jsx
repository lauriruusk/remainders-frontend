import React from 'react';
import {
  Container, Col, Row,
} from 'react-bootstrap';
import LoginForm from './LoginForm';
import AlertForm from './AlertForm';

// Actions-komponentti. sisältää kirjautumisen virhe/onnistumisilmoituksen ja varsinaisen kirjautumisikkunan

// This component contains error window for login actions and input fields for login.
const Actions = ({
  hLog, setUsername, setPass, user, show, setShow, success, loginMsg
}) => (
  <Container id="actionform" className="bg-black">
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
