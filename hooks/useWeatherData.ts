import { useState, useCallback } from "react";
import { getCities, getWeather } from "@/utils/functions";
import { City, Weather } from "@/types/weather";

export const useWeatherData = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [cities, setCities] = useState<City[]>([]);

  const fetchWeather = useCallback(async (city: City) => {
    const weatherData = await getWeather(city.lat, city.lon);
    setWeather(weatherData);
  }, []);

  const fetchCities = useCallback(async (query: string) => {
    if (query.length > 2) {
      const citiesData = await getCities(query);
      setCities(citiesData);
    } else {
      setCities([]);
    }
  }, []);

  return {
    weather,
    cities,
    fetchWeather,
    fetchCities,
  };
};
