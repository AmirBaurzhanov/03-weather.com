import React from 'react'
import { connect } from 'react-redux';
import { setWeatherTC } from '../../redux/reducers/weatherReducer';
import Weather from './weather';
import Preloader from '../commons/preloader'

class WeatherContainer extends React.PureComponent {

    getCity = (formData) => {
        this.props.setWeatherTC(formData.city)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Weather onSubmit={this.getCity} weather={this.props.weather} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather.wData,
        isFetching: state.weather.isFetching
    }
}

const WeatherConnected = connect(mapStateToProps, { setWeatherTC })(WeatherContainer);

export default WeatherConnected;