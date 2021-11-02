/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import remindServe from './services/remainders';
import Actions from './components/Actions';
import DataGrid from './components/DataGrid';
import Header from './components/Header';
import Footer from './components/Footer';
import loginService from './services/login';
import './App.css';

const App = () => {
  const [remainders, setRemainders] = useState([]);
  const [filtr, setFiltr] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(async () => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser');
    if (loggedUserJSON) {
      const usr = JSON.parse(loggedUserJSON);
      setUser(usr);
      remindServe.setToken(usr.token);
      const refreshRemind = await remindServe.getAsyncLatest();
      setRemainders(refreshRemind);
    }
  }, []);

  const searchRemainders = (event) => {
    event.preventDefault();
    remindServe
      .getSearch(filtr)
      .then((response) => {
        setRemainders(response);
      });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const kaytt = {
        uname: { username },
        token: '',
      };
      kaytt.token = await loginService.login({
        username, password,
      });
      // console.log(kaytt);
      window.localStorage.setItem(
        'loggedUser', JSON.stringify(kaytt),
      );

      remindServe.setToken(kaytt.token);
      setUser(kaytt);
      setUsername('');
      setPassword('');
      const tempRemind = await remindServe.getAsyncLatest();
      setRemainders(tempRemind);
      setSuccess(true);
      setShow(true);
    } catch (exception) {
      console.log(exception);
      setSuccess(false);
      setShow(true);
    }
  };

  return (
    <div className="App">
      <Header user={user} search={searchRemainders} setFlt={setFiltr} />
      <Actions
        hLog={handleLogin}
        setUsername={setUsername}
        setPass={setPassword}
        user={user}
        setShow={setShow}
        show={show}
        success={success}
      />
      {user !== null && <DataGrid rem={remainders} />}
      <Footer />
    </div>
  );
};

export default App;
