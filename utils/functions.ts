import { DateTime } from "luxon";

import {
  OPEN_WEATHER_URL,
  OPEN_WEATHER_API_KEY,
  GEO_DB_URL,
  GEO_DB_API_KEY,
} from "@/lib/const";
import { Weather } from "@/types/weather";

/**
 * Fetches cities data for a given value
 *
 * @param {string} value - The citie
 * @returns {Promise<Weather>} A promise that resolves to a Weather object.
 */
export const getCities = async (city: string) => {
  const url = `${OPEN_WEATHER_URL}/geo/1.0/direct?q=${city}&limit=5&appid=${OPEN_WEATHER_API_KEY}`;

  const response = await fetchData(url);
  return response;
};

/**
 * Fetches weather data for a given latitude and longitude.
 *
 * @param {string} lat - The Latitude.
 * @param {string} lon - The Longitude.
 * @returns {Promise<Weather>} A promise that resolves to a Weather object.
 */
export const getWeather = async (lat: number, lon: number) => {
  const url = `${OPEN_WEATHER_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`;
  const response = await fetchData(url);
  return response as Weather;
};

/**
 *
 * @param url
 * @returns an object
 */
export const fetchData = async (url: string, options?: object) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      console.error("Response Status:", response.statusText);
      throw new Error(response.statusText);
    }
    const data = response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
};

/**
 *
 * @param {number} kelvin Temperature value in Kelvins
 * @returns Temperature in Celsius
 */
export const kelvinToCelsius = (kelvin: number) => {
  return Math.round(kelvin - 273.15);
};

export const formatToLocalTime = (
  secs: number,
  timezone: number,
  format: string = "cccc, dd LLL yyyy' | ' hh:mm a"
) => {
  return DateTime.fromSeconds(secs).setZone(timezone).toFormat(format);
};
