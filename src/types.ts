export type Countries = {
  altSpellings: {
    [key: string]: {
      0: string;
      1: string;
      2: string;
    };
  };
  area: number;
  capital: string;
  capitalInfo: {
    [key: string]: {
      latlng: number;
    };
  };
  car: string;
  signs: string;
  cca2: string;
  cca3: string;
  ccn3: string;
  coatOfArms: string | undefined;
  continents: string;
  currencies: string;
  XPF: string;
  demonyms: string;
  eng: string;
  flag: string;
  flags: { png: string; svg: string };
  idd: string;
  suffixes: string;
  independent: boolean;
  landlocked: boolean;
  languages: string;
  latlng: number;
  maps: string;
  name: { common: string; official: string };
  population: number;
  postalCode: string;
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string;
  tld: string;
  translations: string;
  unMember: boolean;
};
