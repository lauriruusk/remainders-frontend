import axios from 'axios';
<<<<<<< HEAD
=======
<<<<<<< HEAD

const baseUrl = 'https://localhost:8888/api/v1';
const getLatest = () => {
  const request = axios.get(`${baseUrl}/latest`);
  return request.then((response) => response.data);
};

const getSearch = (filt) => {
  const request = axios.get(`${baseUrl}/search/${filt}`);
  return request.then((response) => response.data);
};

export default { getLatest, getSearch };
=======
>>>>>>> tests2
import config from '../config'

// perusurl, josta johdetaan funktioiden osoitteet, ja token-muuttuja.
const baseUrl = config.api_url + '/api/v1';
let token = null;

// asettaa käyttäjälle annetun tokenin
const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

// hakee viimeisimmät muistutukset
const getLatest = () => {
  const request = axios.get(`${baseUrl}/latest`);

  return request.then((response) => response.data);
};

// asynkronoitu haku viimeisimmille muistutuksille
const getAsyncLatest = async () => {
  const config = {
    headers: { Authorization: token },
  };
  try {
    const response = await axios.get(`${baseUrl}/latest`, config);
    return response.data;
  } catch (e) {
    console.log(e);
  }
  
};

// hakee muistutuksista kriteerin täyttäviä.
const getSearch = async (filt) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.get(`${baseUrl}/search/${filt}`, config);
  console.log("search:" + response);
  return response.data;
};

const exportPackage = {
  getLatest, getSearch, setToken, getAsyncLatest,
};

export default exportPackage;
<<<<<<< HEAD
=======
>>>>>>> f46cfdca6e1a0000d21f91f51778076e7661d2b6
>>>>>>> tests2
