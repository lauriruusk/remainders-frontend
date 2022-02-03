import React from 'react';
<<<<<<< HEAD
import { Form, Button } from 'react-bootstrap';

const SearchForm = ({ search, setFlt }) => (
  <Form onSubmit={search}>
    <Form.Group className="mb-3" controlId="searchFunc">
      <Form.Label>Hae</Form.Label>
      <Form.Control id="ctrl" type="text" placeholder="hakuteksti" onChange={({ target }) => setFlt(target.value)} />
    </Form.Group>
    <Button variant="primary" type="submit">Submit</Button>
=======
import { Form, Button, FormControl } from 'react-bootstrap';

const SearchForm = ({ search, setFlt }) => (
  <Form className="d-flex p-2" onSubmit={search}>
    <FormControl className="me-2" id="ctrl" type="text" placeholder="hakuteksti" onChange={({ target }) => setFlt(target.value)} />
    <Button id="searchbtn" className="bg-info pr-5" variant="primary" type="submit">Hae</Button>
>>>>>>> f46cfdca6e1a0000d21f91f51778076e7661d2b6
  </Form>
);

export default SearchForm;
