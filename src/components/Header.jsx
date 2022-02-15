import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import SearchForm from './SearchForm';
import LoggedInForm from './LoggedInForm';

// Header, johon on istutettu 
const Header = ({ user, search, setFlt, logout }) => {
  
  return (
    // <div id="hworkaround">
      <Navbar className="navbar fixed-top navbar-light bg-black" >
        <Container>
          <Navbar.Brand className="text-light" href="#home">Muistutusten selaus</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {user !== null && <LoggedInForm user={user}/>}
            {user !== null && <SearchForm search={search} setFlt={setFlt} />}
            <p> </p>
            {user !== null && <Button className="text-light ml-5 bg-red" variant="danger" onClick={logout}>Kirjaudu ulos</Button>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    // </div>
  );
};

export default Header;
