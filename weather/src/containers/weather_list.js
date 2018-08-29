/**
 * Created by karan on 23/08/2018.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

// import {SparklinesLine}  from "react-sparklines/src/SparklinesLine";

class WeatherList extends Component{

    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const pressures = cityData.list.map(weather => weather.main.pressure);



        return(
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color="orange"/>
                </td>
                <td>
                    <Chart data={pressures} color="green"/>
                </td>
                <td>
                    <Chart data={humidities} color="blue"/>
                </td>
            </tr>
        );
    }
    render(){
        return(
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}){
    return{weather};//{weather} == {weather:weather}
}

export default connect(mapStateToProps)(WeatherList);