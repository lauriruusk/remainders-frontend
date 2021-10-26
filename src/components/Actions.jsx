import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import SearchForm from './SearchForm';
import LoginForm from './LoginForm';
import LoggedInForm from './LoggedInForm';

const Actions = ({
  searchRemainders, setFiltr, hLog, setUser, setPass, user,
}) => (
  <Container>
    <Row>
      <Col>
        {user === null && <LoginForm hLog={hLog} setUser={setUser} setPass={setPass} />}
        {user !== null && <LoggedInForm user={user} />}
      </Col>
      <Col>
        <SearchForm search={searchRemainders} setFlt={setFiltr} />
      </Col>
    </Row>
  </Container>
);

export default Actions;
