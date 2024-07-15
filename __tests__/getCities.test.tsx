import { fetchData } from "@/utils/functions";
import getAllCities from "@/utils/getAllCities";

jest.mock("../utils/functions");

it("tests FetchData function", async () => {
  const mockData = [
    {
      name: "Barcelona",
      lat: 41.3828939,
      lon: 2.1774322,
      country: "ES",
      state: "Catalonia",
      local_names: {
        ar: "برشلونة",
        be: "Барселона",
        br: "Barcelona",
        ca: "Barcelona",
        cs: "Barcelona",
        de: "Barcelona",
        el: "Βαρκελώνη",
        en: "Barcelona",
        eo: "Barcelono",
        es: "Barcelona",
        eu: "Bartzelona",
        fr: "Barcelone",
        gd: "Barsalòna",
        gl: "Barcelona",
        he: "ברצלונה",
        hi: "बार्सॆलोना",
        it: "Barcellona",
        ja: "バルセロナ",
        kn: "ಬಾರ್ಸೆಲೋನಾ",
        ko: "바르셀로나",
        lt: "Barselona",
        mk: "Барселона",
        oc: "Barcelona",
        pl: "Barcelona",
        pt: "Barcelona",
        ru: "Барселона",
        sr: "Барселона",
        tr: "Barselona",
        uk: "Барселона",
        zh: "巴塞罗那",
      },
    },
  ];
  const resolvedValue = {
    status: "MOCK",
    data: mockData,
  };

  (fetchData as jest.Mock).mockResolvedValue(resolvedValue);
  //act
  const cities = await getAllCities();

  // Verify if data received is equal to mockData
  expect(cities).toEqual(mockData);
});
