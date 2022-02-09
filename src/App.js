/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
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

const App = () => {
  const [remainders, setRemainders] = useState([]);
  const [filtr, setFiltr] = useState('');
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
    try {
      if (loggedUserJSON) {
      const usr = JSON.parse(loggedUserJSON);
      setUser(usr);
      remindServe.setToken(usr.token);
      const refreshRemind = await remindServe.getAsyncLatest();
      setRemainders(refreshRemind);
      }
      fetchRemainders();
    } catch (e) {
      errorManager(e);
      logout();
    }
    
    }
    
  }, []);

  // hakufunktio. etsii annetun hakusanan sisältäviä muistutuksia. Mikäli token on 
  // vanhentunut, palauttaa virheilmoituksen ja kirjautuu ulos.
  const searchRemainders = (event) => {
    event.preventDefault();
    remindServe
      .getSearch(filtr)
      .then((response) => {
        setRemainders(response);
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
    </div>
  );
};

export default App;
