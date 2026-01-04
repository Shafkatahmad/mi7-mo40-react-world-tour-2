import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
  const {country, handleVisitedCountries, handleVisitedFlages} = props;
  return (
    <div>
      <h4>Country Details</h4>
      <hr />
      {/* <CountryData
          country={country}
          handleVisitedCountries={handleVisitedCountries}
          handleVisitedFlages={handleVisitedFlages}
      ></CountryData> */}
      <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDetail;