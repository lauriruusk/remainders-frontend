import React from 'react';
import { Container } from 'react-bootstrap';

const LoggedInForm = ({ user }) => (
  <Container>
    <p className="text-light" id="logged">
      Kirjautuneena
      {' '}
      {user.uname}
      {' '}
    </p>
  </Container>
);

export default LoggedInForm;
