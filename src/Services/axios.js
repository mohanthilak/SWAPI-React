import axios from 'axios';

const API_BASE_URL = 'https://swapi.dev/api'; // Replace with your API base URL

export const axiosHandler = axios.create({
  baseURL: API_BASE_URL,
});