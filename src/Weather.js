import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./styles.css";

{
  /*   ******  Temperature ******  */
}
export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity); 
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      feels_like: response.data.main.feels_like,
      max_temp: response.data.main.temp_max,
      min_temp: response.data.main.temp_min,
    });
     
    setReady(true);
  }

  function search() {
    const apiKey = "ce4afc8744a0f1fef5bae5142b3fbd94";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
   search();
  }

  function handleCityChange(event){
setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="row"></div>
        </div>
        <h1>
          <span>😎</span>What weather you can expect<span>🤔</span>
        </h1>
        {/*   ******  Search ******  */}
        <div className="container">
      <form onSubmit={handleSubmit} className="search" id="city-search">
        <div className="row">
          <div className="offset-3 col-2">
            <input
              type="search"
              placeholder="Search by city 🔍"
              autoFocus="on"
              id="input-search"
              onChange={handleCityChange}
            />
          </div>
          <br />
          <div className="col-3">
            <input
              type="submit"
              value="search 🌍"
              id="button-search"
              className="btn btn-primary"
            />
          </div>
        </div>
      </form>
    </div>
        <br />
        <WeatherInfo data={weatherData} />
          <br />
          {/*   **********  Weather Forecast  **********  */}
          <WeatherForecast coord={weatherData.coord} />
          <div className="row weather-forecast"></div>
          {/*   **********  Coded By  **********  */}
          <div className="row">
            <div className="col-md-6 coded-by">
              <footer>
                <small>
                  {" "}
                  Open-sourced on{" "}
                  <a
                    href="https://github.com/Marietje86/React-weather-app"
                    target="_blank"
                  >
                    {" "}
                    Github
                  </a>
                </small>
                Weather engine brought to you by{" "}
                <a
                  href="https://www.linkedin.com/in/mariette-everitz"
                  target="_blank"
                >
                  {" "}
                  Mariëtte Everitz💁🏽‍♀️
                </a>
              </footer>
        </div>
      </div>
      </div>
    );
  } else {
   search();
    return "Load";
  }
}
