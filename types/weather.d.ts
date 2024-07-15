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

export interface City {
  name: string;
  local_names: LocalNames;
  lat: number;
  lon: number;
  country: string;
  state: string;
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

export interface Weather {
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
  dt: number;
  timezone: string;
}
