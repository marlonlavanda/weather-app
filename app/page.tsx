"use client";

import { useState, useCallback } from "react";

import { getWeather } from "@/utils/functions";
import SearchContainer from "@/components/SearchContainer";
import WeatherDisplay from "@/components/WeatherDisplay";
import { City } from "@/types/weather";

export default function Page() {
  const [weather, setWeather] = useState<any>(null);

  const handleCitySelect = useCallback(async (city: City) => {
    const weatherData = await getWeather(city.lat, city.lon);
    setWeather(weatherData);
  }, []);

  return (
    <main className="py-12">
      <SearchContainer onCitySelect={handleCitySelect} />
      <WeatherDisplay weather={weather} />
    </main>
  );
}
