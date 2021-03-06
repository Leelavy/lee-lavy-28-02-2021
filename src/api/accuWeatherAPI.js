import axios from "axios";

const base_url = 'https://dataservice.accuweather.com';
const api_key = 'CFdxSm7V80KFtI5fOi2AXvPQs0yQaE9v';

export const getAutocomplete = (q) =>
  axios.get(`${base_url}/locations/v1/cities/autocomplete?apikey=${api_key}&q=${q}`);

export const getCurrentWeather = (locationKey, isWithDetails = false) =>
  axios.get(`${base_url}/currentconditions/v1/${locationKey}?apikey=${api_key}&details=${isWithDetails}`);

export const getFiveDaysWeather = (locationKey, isWithDetails = false, isMetric = true) =>
  axios.get(`${base_url}/forecasts/v1/daily/5day/${locationKey}?apikey=${api_key}&details=${isWithDetails}&metric=${isMetric}`);

export const getCityByLocation = (lat, lon) =>
  axios.get(`${base_url}/locations/v1/cities/geoposition/search?apikey=${api_key}&q=${lat}%2C${lon}`);