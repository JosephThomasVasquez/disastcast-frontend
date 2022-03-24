import React, { useState, useEffect } from "react";
import SearchLocation from "./search/SearchLocation";
import Viewport from "./viewport/Viewport";
import { getWeather } from "./utils/api";

function App() {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    console.log(forecast);
  }, [setForecast]);

  const handleSearch = (searchLocation) => {
    const loadForecast = async () => {
      const abortController = new AbortController();

      try {
        console.log("searchLocation", searchLocation);

        if (searchLocation) {
          const response = await getWeather(searchLocation)
            .then((response) => response.json())
            .then((data) => {
              setForecast(data);
            });
        }
      } catch (error) {
        console.log("error:", error);
      }
    };

    loadForecast();
    console.log("forecast", forecast);
  };

  return (
    <div className="">
      <div className="row">
        <SearchLocation forecast={forecast} handleSearch={handleSearch} />
      </div>

      <Viewport forecast={forecast} />
    </div>
  );
}

export default App;
