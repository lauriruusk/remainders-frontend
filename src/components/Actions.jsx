import React from 'react';
import {
  Container, Col, Row,
} from 'react-bootstrap';
// import SearchForm from './SearchForm';
import LoginForm from './LoginForm';
// import LoggedInForm from './LoggedInForm';
import AlertForm from './AlertForm';

const Actions = ({
  hLog, setUsername, setPass, user, show, setShow, success,
}) => (
  <Container id="actionform">
    <Row>
      {show === true && <AlertForm setShow={setShow} success={success} />}
    </Row>
    <Row>
      <Col>
        {user === null && <LoginForm hLog={hLog} setUsername={setUsername} setPass={setPass} />}
        {/* {user !== null && <LoggedInForm user={user} />} */}
        {/* {user !== null && <SearchForm search={searchRemainders} setFlt={setFiltr} />} */}
      </Col>
      {/* <Col>

      </Col> */}
    </Row>
  </Container>
);

export default Actions;
