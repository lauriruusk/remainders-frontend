import React from 'react';
// import { Container, Text } from 'react-bootstrap';

const LoggedInForm = ({ user }) => (
  <div>
    <p>
      Logged in as
      {' '}
      {user.username}
    </p>
  </div>
);

export default LoggedInForm;
