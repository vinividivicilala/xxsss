"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import World from "./icons/World";

interface Weather {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    last_updated: string;
    temp_c: number;
    condition: {
      icon: string;
    };
  };
}

export default function WeatherApi() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(true);
  const URL =
    "http://api.weatherapi.com/v1/current.json?key=&q=indonesia&aqi=no";
  useEffect(() => {
    const weatherApi = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    };
    weatherApi();
  }, []);

  return (
    <section>
      {loading ? (
        <div className="py-2 text-sm">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="flex items-center gap-3 text-[13px]">
          <div className="flex items-center gap-2">
            <World />
            <p>
              {weather?.location.name}, {weather?.location.country}
            </p>
          </div>
          <div>
            <p>|</p>
          </div>
          <div className="flex items-center bg-gray-100 rounded">
            <p className="pl-2">{weather?.current.temp_c}°C</p>
            {weather?.current.condition.icon && (
              <Image
                className="w-auto h-auto"
                src={`https:${weather.current.condition.icon}`}
                alt="weather"
                width={32}
                height={32}
                priority
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
