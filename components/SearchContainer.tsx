"use client";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { getCities } from "@/utils/functions";
import { City } from "@/types/weather";

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
      <div className="w-full max-w-full px-8 xl:px-0 xl:max-w-[800px]">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Weather App</h1>
        </div>
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
          sx={{
            ".MuiAutocomplete-input": {
              color: "white", // Change the text color here
            },
            ".MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white", // Change border color to white
              },
              "&:hover fieldset": {
                borderColor: "white", // Change border color to white on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "white", // Change border color to white when focused
              },
            },
            ".MuiInputLabel-root": {
              color: "white", // Change label color to white
            },
            ".MuiInputBase-input": {
              "&::placeholder": {
                color: "white", // Change placeholder color to white
                opacity: 1, // Ensure placeholder color is not faded
              },
            },
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
