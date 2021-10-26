import React from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginForm = ({ hLog, setUser, setPass }) => (
  <Form onSubmit={hLog}>
    <Form.Group className="mb-3">
      <Form.Label>Käyttäjä</Form.Label>
      <Form.Control placeholder="username" onChange={({ target }) => setUser(target.value)} />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Salasana</Form.Label>
      <Form.Control type="password" placeholder="password" onChange={({ target }) => setPass(target.value)} />
    </Form.Group>
    <Button type="submit">Kirjaudu</Button>
  </Form>
);

export default LoginForm;
