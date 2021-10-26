/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import remindServe from './services/remainders';
import Actions from './components/Actions';
import DataGrid from './components/DataGrid';
// import Header from './components/Header';
// import Footer from './components/Footer';
import loginService from './services/login';

const App = () => {
  const [remainders, setRemainders] = useState([]);
  const [filtr, setFiltr] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   remindServe
  //     .getLatest()
  //     .then((response) => {
  //       setRemainders(response);
  //     });
  // }, []);

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
      const kaytt = await loginService.login({
        username, password,
      });

      window.localStorage.setItem(
        'loggedUser', JSON.stringify(kaytt),
      );

      remindServe.setToken(kaytt);
      setUser(kaytt);
      setUsername('');
      setPassword('');
      const tempRemind = await remindServe.getAsyncLatest();
      setRemainders(tempRemind);
    } catch (exception) {
      console.log(exception);
    }
  };

  return (
    <div className="App">
      {/* <Header /> */}
      <Actions
        searchRemainders={searchRemainders}
        setFiltr={setFiltr}
        hLog={handleLogin}
        setUser={setUsername}
        setPass={setPassword}
        user={user}
      />
      {user !== null && <DataGrid rem={remainders} />}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
