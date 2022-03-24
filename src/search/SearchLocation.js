import React, { useState, useEffect } from "react";

const SearchLocation = ({ forecast, handleSearch }) => {
  const [searchCity, setSearchCity] = useState("");

  const handleChange = ({ target }) => {
    setSearchCity(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleSearch(searchCity);
  };

  const forecastDisplay = () => {
    return (
      <div>
        <h4>Current Forecast</h4>
        <div>
          {forecast.current.temp_f}
          F°
        </div>
        <div>{forecast.current.condition.text}</div>
        <div>{forecast.current.humidity} Humidity</div>
        <div>
          {forecast.current.wind_mph}mph Winds {forecast.current.wind_dir}
        </div>
      </div>
    );
  };

  const airQualityDisplay = () => {
    return (
      <div>
        <h4>AQi</h4>
        <div>{forecast?.current.air_quality.co.toFixed()} CO</div>
        <div>{forecast?.current.air_quality.no2.toFixed()} NO2</div>
        <div>{forecast?.current.air_quality.pm2_5.toFixed()} pm2.5</div>
        <div>{forecast?.current.air_quality.pm10.toFixed()} pm10</div>
        <div>{forecast?.current.air_quality.o3.toFixed()} O3</div>
      </div>
    );
  };

  return (
    <div className="search-form">
      <div className="col title">
        <h2>disastcast</h2>{" "}
        <span className="coords-title">
          {forecast?.location.name}, {forecast?.location.region} -{" "}
          {forecast?.location.country}
        </span>
      </div>

      <div className="col">
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Location"
          onChange={handleChange}
          value={searchCity}
        />
      </div>

      <div className="col">
        <button type="submit" className="btn-primary" onClick={handleSubmit}>
          Search
        </button>
      </div>

      {forecast ? forecastDisplay() : null}
      {forecast ? airQualityDisplay() : null}
      {/* {forecast ? <div>{JSON.stringify(forecast)}</div> : null} */}
    </div>
  );
};

export default SearchLocation;
