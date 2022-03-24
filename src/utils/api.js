// Set headers
const headers = new Headers();
headers.append("Content-Type", "application/geo+json");
headers.append("Access-Control-Allow-Headers", "*");
// headers.append("User-Agent", "application/json");

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const WEATHER_API_BASE_URL = process.env.REACT_APP_WEATHER_API_BASE_URL;

// Make the actual fetch request
const fetchJson = async (url, options, onCancel) => {
  try {
    //   Fetch from url with options
    const response = await fetch(url, options);

    // If response was successful and has no content return null
    if (response.status === 204) {
      return null;
    }

    // Wait asynchonously for json data
    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }

    // Return data from the response in json
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }

    return Promise.resolve(onCancel);
  }
};

export const getWeather = async (location, signal) => {
  const url = new URL(`${WEATHER_API_BASE_URL}${location}&aqi=yes`);

  return await fetch(url);
};
