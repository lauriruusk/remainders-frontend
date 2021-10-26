import axios from 'axios';

const baseUrl = 'https://localhost:8888/api/v1';
let token = null;

const setToken = (newToken) => {
  token = `${newToken}`;
};

const getLatest = () => {
  const request = axios.get(`${baseUrl}/latest`);

  return request.then((response) => response.data);
};

const getAsyncLatest = async () => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.get(`${baseUrl}/latest`, config);
  return response.data;
};

const getSearch = async (filt) => {
  const config = {
    headers: { Authorization: token },
  };
  console.log(window.localStorage.getItem('loggedUser'));
  const response = await axios.get(`${baseUrl}/search/${filt}`, config);
  return response.data;
};

export default {
  getLatest, getSearch, setToken, getAsyncLatest,
};
