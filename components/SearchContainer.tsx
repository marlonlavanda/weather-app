"use client";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { City } from "@/types/weather";

interface SearchInputProps {
  onCitySelect: (city: City) => void;
  fetchCities: (query: string) => void;
  cities: City[];
}

export default function SearchContainer({
  onCitySelect,
  fetchCities,
  cities,
}: SearchInputProps) {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <section className="w-screen max-w-full flex justify-center">
      <div className="w-full max-w-full px-8 xl:px-0 xl:max-w-[800px]">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Weather App</h1>
        </div>
        <Autocomplete
          freeSolo
          id="combo-box-demo"
          options={cities}
          value={inputValue}
          getOptionLabel={(option) =>
            typeof option === "string"
              ? option
              : `${option.name},${option.state}, ${option.country}`
          }
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
            fetchCities(newInputValue);
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
