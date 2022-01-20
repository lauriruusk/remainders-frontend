import React from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';

const SearchForm = ({ search, setFlt }) => (
  <Form className="d-flex p-2" onSubmit={search}>
    <FormControl className="me-2" id="ctrl" type="text" placeholder="hakuteksti" onChange={({ target }) => setFlt(target.value)} />
    <Button id="searchbtn" className="bg-info pr-5" variant="primary" type="submit">Hae</Button>
  </Form>
);

export default SearchForm;
