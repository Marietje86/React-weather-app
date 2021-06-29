import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row justify-content-between current-weather-conditions mb-4">
        <div className="col">
          <div className="location">
            {props.data.city}, {props.data.country}
          </div>
          <div className="d-flex justify-content-center align-items-end">
            <div className="weather-icon-description">
              <WeatherIcon code={props.data.icon} />
              <div className="text-capitalize">{props.data.description}</div>
            </div>
            <div className="weather-info">
              <div className="date-and-time">
                Last updated: <FormattedDate date={props.data.date} />
              </div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          <div className="row weather-app-wrapper">
            <div className="col"></div>
            <p>Feels like: {Math.round(props.data.feels_like)}°C</p>
            <p>
              H/L:{" "}
              <span className="high-temp">
                {Math.round(props.data.max_temp)}
              </span>
              °C
              <span className="low-temp">
                {" "}
                {Math.round(props.data.min_temp)}
              </span>
              °C
            </p>
            <p>Humidity: {Math.round(props.data.humidity)}%</p>
            <p>Winds: {Math.round(props.data.wind)} km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}