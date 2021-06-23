import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return ( 
        <div className="WeatherInfo">
    <div className="row justify-content-between current-weather-conditions">
    <div className="col-6">
      <div className="location">
        {props.data.city}, {props.data.country}
      </div>
      <br />
      <div className="date-and-time">
        Last updated: <FormattedDate date={props.data.date} />
      </div>
    </div>
    <h2 id="temperature">{Math.round(props.data.temperature)}°C
      <a href="#" id="celsius"></a>
    </h2>
    <div className="clearfix">
      <h3 id="show-city"></h3>
      <div className="text-capitalize">{props.data.description}</div>
      <br />
      <div className="row mt-3">
      <div className="col-5">
      <div className="clearfix">  
      <div className="float-left">  
      <WeatherIcon code={props.data.icon} />
      </div>
      </div>
      </div>
      </div>
    </div>
    <br />
    <ul>
      <div className="weather-app-wrapper">
        <li className="col-3">Feels like: {Math.round(props.data.feels_like)}°C</li>
        <li className="col-3">
          H/L: <span className="high-temp">{Math.round(props.data.max_temp)}</span>°C
          <span className="low-temp"> {Math.round(props.data.min_temp)}</span>°C
        </li>
        <li className="col-3">Humidity: {Math.round(props.data.humidity)}%</li>
        <li className="col-3">Winds: {Math.round(props.data.wind)} km/h</li>
      </div>
    </ul>
    </div>
    </div>
    );
}