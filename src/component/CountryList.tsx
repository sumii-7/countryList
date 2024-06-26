import { useEffect, useState } from "react";
import { getCountry } from "../api/api.ts";
import { Countries } from "../types.ts";
import styled from "styled-components";
import CountryCard from "./CountryCard.tsx";

const CountryList = () => {
  const [countryList, setCountryList] = useState<Countries[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<Countries[]>([]);
  useEffect(() => {
    getCountry().then((data) => {
      setCountryList(data);
    });
  }, []);

  const selectedCountryHandler = (value: Countries) => {
    setSelectedCountries((prev) => [...prev, value]);
    setCountryList(countryList.filter((item) => item !== value));
  };

  const deleteCountryHandler = (value: Countries) => {
    setSelectedCountries(selectedCountries.filter((item) => item !== value));
    setCountryList((prev) => [...prev, value]);
  };

  return (
    <>
      <StWrap>
        <StFavoriteTitle>Favorite Countries</StFavoriteTitle>
        <StCountryBox>
          {selectedCountries.map((value) => {
            return (
              <div key={value.name.common}>
                <CountryCard
                  countryHandler={deleteCountryHandler}
                  value={value}
                />
              </div>
            );
          })}
        </StCountryBox>
        <StCountriesTitle>Countries</StCountriesTitle>
        <StCountryBox>
          {countryList?.map((value) => {
            return (
              <div key={value.name.common}>
                <CountryCard
                  countryHandler={selectedCountryHandler}
                  value={value}
                />
              </div>
            );
          })}
        </StCountryBox>
      </StWrap>
    </>
  );
};
const StWrap = styled.div`
  width: 90%;
  margin: 0 auto;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;

const StFavoriteTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
`;

const StCountriesTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const StCountryBox = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  .box {
    width: 80%;
    height: 150px;
    border-radius: 10px;
    box-shadow: 0px 3px 5px 3px rgba(0, 0, 0, 0.1);
    padding: 0px 10px;
    margin-bottom: 10px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    & > div {
      width: 100%;
    }

    img {
      width: 100px;
      height: 65px;
      margin-bottom: 18px;
    }

    .countryName {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }

  .box:hover {
    box-shadow: 0px 3px 7px 3px rgba(0, 0, 0, 0.2);
  }
`;

export default CountryList;
