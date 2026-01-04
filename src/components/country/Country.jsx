import { useState } from 'react';
import './country.css';
const Country = ({country, handleVisitedCountries}) => {
  // console.log(country)

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  }

  // const passWithParams = () => handleVisitedCountries(country);
  

  const {name, flags, cca3} = country;
  return (
    <div className={`country ${visited && 'visited'}`}>
      <h3 style={{color: visited? 'purple': 'white'}}>Name: {name?.common}</h3>
      <img className='img' src={flags.svg} alt="" />
      <p><small>Code: {cca3}</small></p>
      <button onClick={() => handleVisitedCountries(country)}>Mark Visited</button>
      <br />
      <button onClick={handleVisited}>{visited? 'visited': 'going'}</button>
      {visited ? 'I have visited this country': 'I want to visit'}
    </div>
  );
};

export default Country;