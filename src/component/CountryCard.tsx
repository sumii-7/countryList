import { Countries } from "../types";

const CountryCard = ({ value }: { value: Countries }) => {
  return (
    <>
      <div className="box">
        <img src={value.flags.png} alt="" />
        <div>
          <p className="countryName">{value.name.common}</p>
          <p className="countryCapital">{value.capital}</p>
        </div>
      </div>
    </>
  );
};

export default CountryCard;
