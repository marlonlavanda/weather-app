"use client";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { getCities } from "@/utils/functions";
import { LocalNames } from "@/types/weather";
interface City {
  name: string;
  local_names: LocalNames;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

interface SearchInputProps {
  onCitySelect: (city: City) => void;
}

export default function SearchContainer({ onCitySelect }: SearchInputProps) {
  const [options, setOptions] = useState<City[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const loadOptions = async (query: string) => {
      if (query.length > 2) {
        const cities = await getCities(query);
        console.log(cities);
        // const optionsAutocomplete = cities.map((city: any) => ({
        //   country: city.country,
        //   name: city.name,
        //   lat: city.lat,
        //   lon: city.lon,
        // }));
        setOptions(cities);
      }
    };

    if (inputValue) {
      loadOptions(inputValue);
    } else {
      setOptions([]);
    }
  }, [inputValue]);

  return (
    <section className="w-screen max-w-full flex justify-center">
      <div className="w-full max-w-[800px]">
        <Autocomplete
          freeSolo
          id="combo-box-demo"
          options={options}
          getOptionLabel={(option) =>
            typeof option === "string"
              ? option
              : `${option.name},${option.state}, ${option.country}`
          }
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          onChange={(event, newValue) => {
            onCitySelect(newValue as City);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search City"
              variant="outlined"
              fullWidth
            />
          )}
        />
      </div>
    </section>
  );
}
