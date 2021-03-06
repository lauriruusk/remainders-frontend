import axios from 'axios';
import config from '../config'

const baseUrl = config.api_url + '/login';

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data.token;
};

const exportPackage = { login };

export default exportPackage;