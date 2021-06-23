import React, { useState } from "react";

export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("celsius");
function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
    }

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
        }

    function fahrenheit() {
return (props.celsius * 9) / 5 + 32;
    }    

if (unit === "celsius") { 
    return (
        <div>
        <h2 id="temperature">{Math.round(props.celsius)}
        <span className="unit"> <a href="/" onClick={showFahrenheit}>°C</a> | °F</span>
         <a href="#" id="celsius"></a>
       </h2>
       </div>
    );
   
    } else { 
   return (
       <div>
       <h2 id="temperature">{Math.round(fahrenheit())}
       <span className="unit">°C | <a href="/" onClick={showCelsius}>°F</a></span>
        <a href="#" id="celsius"></a>
      </h2>
      </div>
     );
}     
}