import React from "react";

export default function Search() {
  return (
    <div className="container">
      <form className="search" id="city-search">
        <div className="row">
          <div className="offset-3 col-2">
            <input
              type="search"
              placeholder="Search by city 🔍"
              autoFocus="on"
              id="input-search"
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
