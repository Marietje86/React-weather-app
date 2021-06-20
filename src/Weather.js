import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./styles.css";
import Search from "./Search";
{
  /*   ******  Temperature ******  */
}
export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      time: "15:00",
      description: response.data.weather[0].description,
      imgUrl: "http://openweathermap.org/img/wn/01d@2x.png",
      feels_like: response.data.main.feels_like,
      max_temp: response.data.main.temp_max,
      min_temp: response.data.main.temp_min,
    });
     
    setReady(true);
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
        <Search />
        <br />
        <div className="row justify-content-between current-weather-conditions">
          <div className="col-6">
            <div className="location">
              {weatherData.city}, {weatherData.country}
            </div>
            <br />
            <div className="date-and-time">
              Last updated: <FormattedDate date={weatherData.date} />
            </div>
          </div>
          <h2 id="temperature">{Math.round(weatherData.temperature)}°C
            <a href="#" id="celsius"></a>
          </h2>
          <div className="clearfix">
            <h3 id="show-city"></h3>
            <div className="text-capitalize">{weatherData.description}</div>
            <br />
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              id="icon"
              className="float-left"
              width="60"
            />
            <br />
          </div>
          <br />
          <ul>
            <div className="weather-app-wrapper">
              <li className="col-3">Feels like: {Math.round(weatherData.feels_like)}°C</li>
              <li className="col-3">
                H/L: <span className="high-temp">{Math.round(weatherData.max_temp)}</span>°C
                <span className="low-temp"> {Math.round(weatherData.min_temp)}</span>°C
              </li>
              <li className="col-3">Humidity: {Math.round(weatherData.humidity)}%</li>
              <li className="col-3">Winds: {Math.round(weatherData.wind)} km/h</li>
            </div>
          </ul>
          <br />
          {/*   **********  Weather Forecast  **********  */}
          <div className="row weather-forecast"></div>
          {/*   **********  Coded By  **********  */}
          <div className="row">
            <div className="col-md-6 coded-by">
              <footer>
                <small>
                  {" "}
                  Open-sourced on{" "}
                  <a
                    href="https://github.com/Marietje86/Mariette-e-weather-app"
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
      </div>
    );
  } else {
    let apiKey = "ce4afc8744a0f1fef5bae5142b3fbd94";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Load";
  }
}