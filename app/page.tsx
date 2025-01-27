"use client";

import { getWeather } from "@/utils/functions";
import SearchContainer from "@/components/SearchContainer";
import WeatherDisplay from "@/components/WeatherDisplay";
import { City } from "@/types/weather";
import { useWeatherData } from "@/hooks/useWeatherData";

export default function Page() {
  const { weather, cities, fetchWeather, fetchCities } = useWeatherData();

  return (
    <main className="py-12">
      <SearchContainer
        onCitySelect={fetchWeather}
        fetchCities={fetchCities}
        cities={cities}
      />
      <WeatherDisplay weather={weather} />
    </main>
  );
}
