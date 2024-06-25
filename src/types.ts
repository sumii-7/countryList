export type Countries = {
  altSpellings: string[];
  area: number;
  capital: string;
  capitalInfo: {
    [key: string]: {
      latlng: number;
    };
  };
  car: {
    signs: string[];
    side: string;
  };
  cca2: string;
  cca3: string;
  ccn3: string;
  coatOfArms: string | undefined;
  continents: string;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  demonyms: {
    [key: string]: {
      f: string;
      m: string;
    };
  };
  flag: string;
  flags: { png: string; svg: string };
  idd: {
    [key: string]: {
      root: string;
    };
  };
  independent: boolean;
  landlocked: boolean;
  languages: {
    [key: string]: {
      fra: string;
    };
  };
  latlng: number;
  maps: { goolgleMaps: string; openStreeMaps: string };
  name: { common: string; official: string };
  population: number;
  postalCode: { format: string; regex: string };
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string;
  tld: string;
  translations: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  unMember: boolean;
};
