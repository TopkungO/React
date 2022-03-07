import React, { Component } from "react";
import axios from "axios";
import keys from "../key";

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

const date = (e) => {
  let date = String(new window.Date());
  date = date.slice(3, 15);
  return date;
};
export default class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: {},
      weathername: "",
    };
  }

  componentDidMount() {
    var url = `${api.base}weather?q=bangkok&units=metric&appid=${api.key}`;
    axios.get(url).then((res) => {
      console.log(res);
      this.setState({
        weathername: res.data,
        weather: res.data.main,
      });
    });
  }
  render() {
    return (
      <div>
        <div
          className={
            typeof this.state.weather != "undefined"
              ? this.state.weather.temp > 18
                ? "weather hot"
                : "weather cold"
              : "weather"
          }
        >
          <div className="weather_header">สภาพอากาศ</div>
          <div className="loc_date">
            <div className="location">{this.state.weathername.name}</div>
            <div className="date">{date(new Date())} </div>
          </div>
          <div className="temperature">
            อุณหภูมิ {this.state.weather.temp}°C
          </div>
        </div>
      </div>
    );
  }
}
