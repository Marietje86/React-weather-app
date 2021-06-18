import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import Search from "./Search";
{
  /*   ******  Temperature ******  */
}
export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    setTemperature(response.data.main.temp);
  }
  let weatherData = {
    city: "Barcelona",
    country: "Spain",
    date: "Thur, May 5",
    time: "15:00",
    description: "Sunny",
    imgUrl: "http://openweathermap.org/img/wn/01d@2x.png",
    temperature: 23,
    feels_like: 25,
    max_temp: 26,
    min_temp: 21,
    humidity: 72,
    wind: 3,
  };
  if (ready) {
    return (
      <div className="Weather">
        <div class="container">
          <div class="row"></div>
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
              Last updated: {weatherData.date}, {weatherData.time}
            </div>
          </div>
          <h2 id="temperature">
            <a href="#" id="celsius"></a>
          </h2>
          <div class="clearfix">
            <h3 id="show-city">Cloudy</h3>
            <div className="description"></div>
            <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="clear"
              id="icon"
              class="float-left"
              width="60"
            />
            <br />
          </div>
          <br />
          <ul>
            <div className="weather-app-wrapper">
              <li className="col-3">Feels like: {weatherData.feels_like}°C</li>
              <li className="col-3">
                H/L: <span className="high-temp">{weatherData.max_temp}</span>°C
                <span className="low-temp"> {weatherData.min_temp}</span>°C
              </li>
              <li className="col-3">Humidity: {weatherData.humidity}%</li>
              <li className="col-3">Winds: {weatherData.wind} km/h</li>
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
    let city = "Valencia";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Load";
  }
}