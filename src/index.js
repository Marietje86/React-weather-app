import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Valencia" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
