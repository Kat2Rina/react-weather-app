import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="forecastTemp">
            <span className="forecastTemp-max">19˚</span>
            <span className="forecastTemp-min">10˚</span>
          </div>
        </div>
      </div>
    </div>
  );
}