import React, { useState } from "react";


export default function Search(props) {
const [city, setCity] = useState(props.defaultCity); 
  function handleSubmit(event) {
    event.preventDefault();
    //search city//
  }

  function handleCityChange(event){
setCity(event.target.value);
  }

  return (
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
  );
}
