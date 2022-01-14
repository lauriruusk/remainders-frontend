import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import SearchForm from './SearchForm';

const Header = ({ user, search, setFlt }) => {
  const logout = () => {
    window.localStorage.removeItem('loggedUser');
    window.location.reload();
  };
  return (
    // <header>
    //   <strong>Muistutukset</strong>
    //   {user !== null && <Button type="submit" onClick={logout} id="logout">
    // Kirjaudu ulos</Button>}
    // </header>
    <Navbar className="navbar fixed-top navbar-light bg-secondary">
      <Container>
        <Navbar.Brand className="text-light" href="#home">Muistutusten selaus</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {user !== null && <SearchForm search={search} setFlt={setFlt} />}
          <p> </p>
          {user !== null && <Button className="text-light ml-5" onClick={logout}>Kirjaudu ulos</Button>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
