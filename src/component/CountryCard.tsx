import { Countries } from "../types";

const CountryCard = ({
  value,
  countryHandler,
}: {
  value: Countries;
  countryHandler: (value: Countries) => void;
}) => {
  return (
    <>
      <div className="box" onClick={() => countryHandler(value)}>
        <img src={value.flags.png} />
        <div>
          <p className="countryName">{value.name.common}</p>
          <p>{value.capital}</p>
        </div>
      </div>
    </>
  );
};

export default CountryCard;
