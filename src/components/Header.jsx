import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import SearchForm from './SearchForm';
import LoggedInForm from './LoggedInForm';

const Header = ({ user, search, setFlt, logout }) => {
  
  return (
    <Navbar className="navbar fixed-top navbar-light bg-secondary">
      <Container>
        <Navbar.Brand className="text-light" href="#home">Muistutusten selaus</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {user !== null && <LoggedInForm user={user}/>}
          {user !== null && <SearchForm search={search} setFlt={setFlt} />}
          <p> </p>
          {user !== null && <Button className="text-light ml-5" onClick={logout}>Kirjaudu ulos</Button>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
