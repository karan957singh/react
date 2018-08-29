import React, { Component } from 'react';
// import logo from './logo.svg';
import SearchBar from '../containers/search_bar'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import WeatherList from '../containers/weather_list'

export default class App extends Component {
  render() {
    return (
        <div>
      <SearchBar/>
          <WeatherList/>
        </div>
    );
  }
}

