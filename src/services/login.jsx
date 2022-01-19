import axios from 'axios';

const baseUrl = 'https://localhost:8888/login';

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  console.log("loginservice:", response)
  return response.data.token;
};

export default { login };
