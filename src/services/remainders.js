import axios from 'axios';

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
