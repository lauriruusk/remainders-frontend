import React from 'react';

import { Form, Button } from 'react-bootstrap';
import { Form, Button, FormControl } from 'react-bootstrap';
const SearchForm = ({ search, setFlt }) => (
  <Form onSubmit={search}>
    <Form.Group className="mb-3" controlId="searchFunc">
      <Form.Label>Hae</Form.Label>
      <Form.Control id="ctrl" type="text" placeholder="hakuteksti" onChange={({ target }) => setFlt(target.value)} />
    </Form.Group>
    <Button variant="primary" type="submit">Submit</Button>
  </Form>
);

export default SearchForm;
