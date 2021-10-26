import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchForm = ({ search, setFlt }) => (
  <Form onSubmit={search}>
    <Form.Group className="mb-3">
      <Form.Label>Hae</Form.Label>
      <Form.Control id="ctrl" type="text" placeholder="hakuteksti" onChange={({ target }) => setFlt(target.value)} />
    </Form.Group>
    <Button variant="primary" type="submit">Hae</Button>
  </Form>
);

export default SearchForm;
