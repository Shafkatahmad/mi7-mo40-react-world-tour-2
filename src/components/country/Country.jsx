import './country.css';
const Country = ({country}) => {
  console.log(country)
  const {name} = country;
  return (
    <div className='country'>
      <h3>Name: {name?.common}</h3>
      {/* <img src={flags.svg} alt="" /> */}
    </div>
  );
};

export default Country;