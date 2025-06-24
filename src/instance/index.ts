import axios from "axios";

const instance = axios.create({
  baseURL: 'http://10.10.20.109:4500/',
  timeout: 1000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'authorization': `Bearer test_b64589b6fcdcd7cd1de20c2d612617`
  },
});

export default instance;

