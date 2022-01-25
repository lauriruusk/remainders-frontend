<<<<<<< HEAD
=======
/* eslint-disable no-unused-vars */
>>>>>>> f46cfdca6e1a0000d21f91f51778076e7661d2b6
/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import remindServe from './services/remainders';
import SearchForm from './components/SearchForm';
import DataGrid from './components/DataGrid';
// import Header from './components/Header';
// import Footer from './components/Footer';
=======
import { useState, useEffect } from 'react';
import remindServe from './services/remainders';
import Actions from './components/Actions';
import DataGrid from './components/DataGrid';
import Header from './components/Header';
import Footer from './components/Footer';
import loginService from './services/login';
import errorManager from './controllers/errorctrl';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
>>>>>>> f46cfdca6e1a0000d21f91f51778076e7661d2b6

const App = () => {
  const [remainders, setRemainders] = useState([]);
  const [filtr, setFiltr] = useState('');
<<<<<<< HEAD

  useEffect(() => {
    remindServe
      .getLatest()
      .then((response) => {
        setRemainders(response);
      });
  }, []);

=======
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loginMsg, setLoginMsg] = useState('');

  // mikäli käyttäjä on jo kirjautunut, hakee selaimen muistista kirjautumistiedot
  // ja hakee muistutukset.
  useEffect(() => {
    const fetchRemainders = async () => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser');
    if (loggedUserJSON) {
      const usr = JSON.parse(loggedUserJSON);
      setUser(usr);
      remindServe.setToken(usr.token);
      const refreshRemind = await remindServe.getAsyncLatest();
      setRemainders(refreshRemind);
    }
    }
    fetchRemainders();
  }, []);

  // hakufunktio. etsii annetun hakusanan sisältäviä muistutuksia. Mikäli token on 
  // vanhentunut, palauttaa virheilmoituksen ja kirjautuu ulos.
>>>>>>> f46cfdca6e1a0000d21f91f51778076e7661d2b6
  const searchRemainders = (event) => {
    event.preventDefault();
    remindServe
      .getSearch(filtr)
      .then((response) => {
        setRemainders(response);
<<<<<<< HEAD
      });
  };

  return (
    <div className="App">
      {/* <Header /> */}
      <SearchForm search={searchRemainders} setFlt={setFiltr} />
      <DataGrid rem={remainders} />
      {/* <Footer /> */}
=======
      }).catch((e) => {
        errorManager(e);
        logout();
      });
  };

  // kirjautuminen. hakee käyttäjänimen ja salasanan perusteella backendilta tokenin, ja tallentaa
  // sen selaimen muistiin. Kirjautumisen onnistuessa hakee muistutuksen näkyville, ja ilmoittaa
  // onnistumisesta vihreällä ikkunalla. Epäonnistuminen ilmoitetaan punaisella ikkunalla.
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const kaytt = {
        uname: username,
        token: '',
      };
      
      kaytt.token = await loginService.login({
        username, password,
      });
      
      window.localStorage.setItem(
        'loggedUser', JSON.stringify(kaytt),
      );

      remindServe.setToken(kaytt.token);
      setUser(kaytt);
      setUsername('');
      setPassword('');
      const tempRemind = await remindServe.getAsyncLatest();
      setRemainders(tempRemind);
      setLoginMsg('Olet nyt kirjautunut!')
      setSuccess(true);
      setShow(true);
    } catch (exception) {
      setLoginMsg('Väärä käyttäjätunnus tai salasana!');
      setSuccess(false);
      setShow(true);
    }
  };

  // uloskirjautuminen. poistaa kirjautumistiedot selaimen muistista ja lataa sivun uudestaan.
  const logout = () => {
    window.localStorage.removeItem('loggedUser');
    window.location.reload();
  };

  // varsinainen näkymä. Header-osiossa otsikko, ehtojen täyttyessä kuka on kirjautunut, haku ja
  // uloskirjautuminen. Pääosassa näytetään joko kirjautumisikkuna tai muistutuskortit. Footerissa
  // organisaation tiedot.
  return (
    <div className="App">
      <Header user={user} search={searchRemainders} setFlt={setFiltr} logout={logout} />
      <Actions
        hLog={handleLogin}
        setUsername={setUsername}
        setPass={setPassword}
        user={user}
        setShow={setShow}
        show={show}
        success={success}
        loginMsg={loginMsg}
      />
      {user !== null && <DataGrid rem={remainders} />}
      <Footer />
>>>>>>> f46cfdca6e1a0000d21f91f51778076e7661d2b6
    </div>
  );
};

export default App;
