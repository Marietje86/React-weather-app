import React, { useState, useEffect, useLayoutEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
setLoaded(false);
    }, [props.coord]);

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }
   
   if (loaded) {
return (
<div className="WeatherForecast">
<div className="row">
    {forecast.map(function(dailyForecast, index) {
        if (index < 5) {
return(
    <div className="col" key={index}>
<WeatherForecastDay data={dailyForecast} />
</div>  
);
}
    })}
</div>
</div>
    );
   } else {
 let apiKey = "ce4afc8744a0f1fef5bae5142b3fbd94";
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
   
   axios.get(apiUrl).then(handleResponse);
   }
   return null;
}


