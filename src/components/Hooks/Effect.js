import React, { useState, useEffect } from "react";
import axios from "axios";
const API = "https://paulrrdiaz-covid19.herokuapp.com/api/countries";

const fetchData = async callback => {
  try {
    const { data } = await axios.get(API);
    callback(data);
  } catch (error) {
    console.error(error);
  }
};

export default () => {
  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState({});

  const getCountryBy = (name, countries) => {
    const current = countries.find(({ country }) => country === name);
    setCurrentCountry(current);
  };

  useEffect(() => {
    fetchData(countries => {
      setCountries(countries);
      getCountryBy("Peru", countries);
    });
  }, []);

  const handleChange = e => {
    getCountryBy(e.target.value, countries);
  };

  return (
    <>
      <h2 className="text-3xl font-bold">React useEffect</h2>
      <div className="text-gray-800">
        <h3 className="text-xl font-bold">Country: {currentCountry.country}</h3>
        <p>Total cases: {currentCountry.total}</p>
        <p>Today cases: {currentCountry.newCases}</p>
        <p>Total deaths: {currentCountry.totalDeaths}</p>
        <p>Serious: {currentCountry.serious}</p>
      </div>
      <div>
        <select value={currentCountry.country} onChange={handleChange}>
          {countries.map(({ country }) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
