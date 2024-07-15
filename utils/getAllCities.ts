import { fetchData } from "./functions";
import { OPEN_WEATHER_URL, OPEN_WEATHER_API_KEY } from "@/lib/const";
import { City } from "@/types/weather";

export default async function getAllCities() {
  const city = "Barcelona,Catalonia, ES";
  const url = `${OPEN_WEATHER_URL}/geo/1.0/direct?q=${city}&limit=5&appid=${OPEN_WEATHER_API_KEY}`;

  const response = await fetchData(url);
  return response?.data as City[];
}
