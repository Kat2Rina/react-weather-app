import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Odesa" />
        <footer>
          This project was coded by Karina Kushnirenko and is{" "}
          <a
            href="https://github.com/Kat2Rina/react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
