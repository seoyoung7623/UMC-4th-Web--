import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const WeatherApi = () => {
  const API_KEY = "32095511f726ae11a7adabc35b08d52a";
  const location = "Seoul";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const [result, setResult] = useState({});

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response);
      setResult(response);
    });
  }, []);

  return (
    <WeatherCont>
      {Object.keys(result).length !== 0 && (
        <WeatherWrap>
          <div className="city">{result.data.name}</div>
          <div className="temperature">
            {Math.round((result.data.main.temp - 273.15) * 10) / 10} °C
          </div>
          <span className="sky">{result.data.weather[0].main}</span>
        </WeatherWrap>
      )}
    </WeatherCont>
  );
};

export default WeatherApi;

const WeatherCont = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
`;
const WeatherWrap = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  border: 2px solid purple;
  border-radius: 9px;
  padding: 10px;
  .temperature {
    font-weight: bold;
    font-size: 30px;
  }
  .sky {
    float: right;
    right: 0px;
    color: gray;
  }
`;
