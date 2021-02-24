import axios from "axios";
import { BASE_URL, API_TOKEN } from './utils';

export async function fetchRecentPermits () {
  const res = await axios.get(BASE_URL, {
    headers: {
      'X-App-Token': API_TOKEN
    }
  });
  return res.data;
};
