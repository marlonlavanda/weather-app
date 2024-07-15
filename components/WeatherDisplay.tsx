"use client";

import React from "react";
import { kelvinToCelsius } from "@/utils/functions";
import { backgroundGradients } from "@/lib/const";

interface Weather {
  name: string;
  main: {
    temp: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  weather: {
    description: string;
  }[];
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
}

interface WeatherDisplayProps {
  weather: Weather | null;
}

export default function WeatherDisplay({ weather }: WeatherDisplayProps) {
  if (!weather) return null;

  return (
    <section className="w-screen max-w-full flex justify-center mt-12">
      <div className="w-full max-w-[800px]">
        <div className={`p-4 rounded-lg shadow-md`}>
          <h2 className="text-2xl font-bold">{weather.name}</h2>
          <p className="text-lg">
            Temperature: {kelvinToCelsius(weather?.main?.temp)}°C
          </p>
          <p className="text-lg">Weather: {weather.weather[0].description}</p>
          <p className="text-lg">Humidity: {weather.main.humidity}%</p>
          <div>
            <p className="flex items-center gap-2">
              <span>Low: {kelvinToCelsius(weather?.main?.temp_min)}°</span>
              <span>High: {kelvinToCelsius(weather?.main?.temp_max)}°</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
