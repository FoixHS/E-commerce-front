import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URL;

export default axios.create({
  baseURL,
});
