import { Countries } from "../types";

export async function getCountry(): Promise<Countries[]> {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  if (!res.ok) {
    throw new Error();
  }
  return res.json();
}
