"use client";

import React from "react";
import { kelvinToCelsius, formatToLocalTime } from "@/utils/functions";
import { Weather } from "@/types/weather";

interface WeatherDisplayProps {
  weather: Weather | null;
}

export default function WeatherDisplay({ weather }: WeatherDisplayProps) {
  if (!weather) return null;

  return (
    <section className="w-screen max-w-full flex justify-center mt-12">
      <div className="w-full max-w-full px-8 xl:px-0 xl:max-w-[800px]">
        <div className="p-4 rounded-2xl border-[1px] border-white flex flex-col gap-12">
          <div className="flex justify-between">
            <div>
              <h4 className="text-lg xl:text-xl font-bold">{weather.name}</h4>
              <h6 className="text-sm xl:text-base font-semibold text-white/75">
                {formatToLocalTime(weather.dt, weather.timezone)}
              </h6>
            </div>
            <div>
              <h1 className="text-4xl xl:text-7xl font-bold">
                {kelvinToCelsius(weather?.main?.temp)}°
              </h1>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h4 className="text-white/50 text-base xl:text-lg font-bold capitalize">
                {weather.weather[0].description}
              </h4>
            </div>
            <div className="flex gap-2 xl:gap-4 text-sm xl:text-base font-bold">
              <h6 className="text-white/50">
                H: {kelvinToCelsius(weather?.main?.temp_max)}°
              </h6>
              <h6 className="text-white/50">
                L: {kelvinToCelsius(weather?.main?.temp_min)}°
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
