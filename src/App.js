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
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://magenta-yeot-308d19.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
