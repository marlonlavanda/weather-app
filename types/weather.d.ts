export interface Weather {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: { speed: number; deg: number; gust: number };
  clouds: { all: number };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface LocalNames {
  el: string;
  en: string;
  eu: string;
  gl: string;
  sr: string;
  ru: string;
  ko: string;
  es: string;
  kn: string;
  cs: string;
  ar: string;
  pl: string;
  de: string;
  mk: string;
  ca: string;
  zh: string;
  be: string;
  oc: string;
  he: string;
  hi: string;
  lt: string;
  fr: string;
  gd: string;
  uk: string;
  pt: string;
  br: string;
  tr: string;
  it: string;
  eo: string;
  ja: string;
}

export interface BGGradients {
  clouds: string;
  clear: string;
  rain: string;
  snow: string;
  thunderstorm: string;
  mist: string;
  fog: string;
  haze: string;
  dust: string;
  smoke: string;
  drizzle: string;
}
