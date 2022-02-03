import React from 'react';
<<<<<<< HEAD

const Header = () => (
  <div>
    <head>
      <p>placeholder</p>
    </head>
  </div>
);
=======
import { Container, Navbar, Button } from 'react-bootstrap';
import SearchForm from './SearchForm';
import LoggedInForm from './LoggedInForm';

// Header, johon on istutettu 
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
>>>>>>> f46cfdca6e1a0000d21f91f51778076e7661d2b6

export default Header;
