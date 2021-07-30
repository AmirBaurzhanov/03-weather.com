import './App.css';
import { connect } from 'react-redux';
import { setWeatherTC } from './redux/reducers/weatherReducer';
import React from 'react';
import WeatherConnected from './components/weather/weatherContainer'

class classApp extends React.Component {
    render() {
        return (
            <div>
                <WeatherConnected />
            </div>
        )
    }
}

const App = connect(null, { setWeatherTC })(classApp);

export default App;
