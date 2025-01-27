import React from "react";

interface Autocomplete {
  show: {
    id: number;
    name: string;
    rating: {
      average: number;
    };
    image: {
      medium: string;
    };
  };
}

interface DropdownSearchProps {
  autocomplete: Autocomplete[];
  // onCitySelect: (city: City) => void;
}

const DropdownSearch: React.FC<DropdownSearchProps> = ({ autocomplete }) => {
  return (
    <div className="py-2">
      <ul>
        {autocomplete.map((data) => {
          const { show } = data;
          return (
            <li
              key={show.id}
              className="flex justify-between cursor-pointer transition duration-500 px-5 py-2 hover:bg-gray-200 text-gray-600 items-center"
            >
              <div className="flex gap-8 items-center">
                <img
                  src={show.image?.medium}
                  alt={show?.name}
                  className="w-[3rem]"
                />
                <h2 className="text-lg">{show?.name}</h2>
              </div>
              <h2>{show.rating.average || "N/A"}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropdownSearch;
