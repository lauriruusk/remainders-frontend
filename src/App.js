/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import remindServe from './services/remainders';
import SearchForm from './components/SearchForm';
import DataGrid from './components/DataGrid';
// import Header from './components/Header';
// import Footer from './components/Footer';

const App = () => {
  const [remainders, setRemainders] = useState([]);
  const [filtr, setFiltr] = useState('');

  useEffect(() => {
    remindServe
      .getLatest()
      .then((response) => {
        setRemainders(response);
      });
  }, []);

  const searchRemainders = (event) => {
    event.preventDefault();
    remindServe
      .getSearch(filtr)
      .then((response) => {
        setRemainders(response);
      });
  };

  return (
    <div className="App">
      {/* <Header /> */}
      <SearchForm search={searchRemainders} setFlt={setFiltr} />
      <DataGrid rem={remainders} />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
