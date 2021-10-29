import React from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginForm = ({ hLog, setUsername, setPass }) => (
  <Form className="position-center" onSubmit={hLog}>
    <Form.Group className="mb-3">
      <Form.Label className="mt-1">Käyttäjä</Form.Label>
      <Form.Control placeholder="käyttäjänimi" onChange={({ target }) => setUsername(target.value)} />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Salasana</Form.Label>
      <Form.Control type="password" placeholder="salasana" onChange={({ target }) => setPass(target.value)} />
    </Form.Group>
    <Button className="mb-3" type="submit">Kirjaudu</Button>
  </Form>
);

export default LoginForm;
