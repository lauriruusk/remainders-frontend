import React from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginForm = ({ hLog, setUsername, setPass }) => (
  <Form className="position-center" onSubmit={hLog}>
    <Form.Group className="mb-3">
      <Form.Label className="mt-1 text-light">Käyttäjä</Form.Label>
      <Form.Control id="username" placeholder="käyttäjänimi" onChange={({ target }) => setUsername(target.value)} />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label className="mt-1 text-light">Salasana</Form.Label>
      <Form.Control id="password" type="password" placeholder="salasana" onChange={({ target }) => setPass(target.value)} />
    </Form.Group>
    <Button id="login" className="mb-3 bg-red" type="submit">Kirjaudu</Button>
  </Form>
);

export default LoginForm;
