import React, {useState} from "react";
import axios from "axios";
import './Weather.css';
import ReactAnimatedWeather from 'react-animated-weather';

export default function Weather(){
    const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState("");

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "d25181c407e88d3cb9c340c5d5dc9687";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form className="weather" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter the city!"
        autoFocus="on"
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div className="weather">
        {form}
        <ul>
          <li>{city}</li>
          <li>{weather.description}</li>
          <li>Temperature: {Math.round(weather.temperature)}ºF</li>
          <li>Wind: {Math.round(weather.wind)}mph</li>
          <li>Humidity: {Math.round(weather.humidity)}⁒</li>
          <li>
            <img src={weather.icon} alt="Weather Icon" />
          </li>
        </ul>
        <div className="row">
          <div className="col-sm-2">
            Mon
          </div>
          <div className="col-sm-2">
            Tues
          </div>
          <div className="col-sm-2">
            Wed
          </div>
          <div className="col-sm-2">
            Thu
          </div>
          <div className="col-sm-2">
            Fri
          </div>
          <div className="col-sm-2">
            Sat
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
             <ReactAnimatedWeather
        icon="CLEAR_NIGHT"
        color="grey"
        size="112"
        animate="true"
      />
          </div>
          <div className="col-sm-2">
             <ReactAnimatedWeather
        icon="SLEET"
        color="blue"
        size="112"
        animate="true"
      />
          </div>
          <div className="col-sm-2">
            <ReactAnimatedWeather
        icon="FOG"
        color="purple"
        size="112"
        animate="true"
      />
          </div>
          <div className="col-sm-2">
            <ReactAnimatedWeather
        icon="FOG"
        color="purple"
        size="112"
        animate="true"
      />
          </div>
          <div className="col-sm-2">
            <ReactAnimatedWeather
        icon="SLEET"
        color="blue"
        size="112"
        animate="true"
      />
          </div>
          <div className="col-sm-2">
             <ReactAnimatedWeather
        icon="CLEAR_NIGHT"
        color="grey"
        size="112"
        animate="true"
      />
          </div>
        </div>
          <div className="row">
          <div className="col-sm-2">
           45º
          </div>
          <div className="col-sm-2">
             57º
          </div>
          <div className="col-sm-2">
            78º
          </div>
          <div className="col-sm-2">
            65º
          </div>
          <div className="col-sm-2">
            66º
          </div>
          <div className="col-sm-2">
            71º
          </div>
        </div>
      </div>
      
    );
  } else {
    return form;
  }
}