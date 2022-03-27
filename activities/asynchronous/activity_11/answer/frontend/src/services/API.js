import Axios from 'axios'
import { ENV_API } from '../configs/Environments';

const api = Axios.create({
  baseURL: ENV_API.URL,
});

export { api }