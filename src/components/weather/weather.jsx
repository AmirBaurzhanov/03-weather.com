import WeatherForm from "./weatherForm";

const Weather = (props) => {
    return (
        <div className="container pt-5">
            <h4 className="pb-1">Here you can find your city weather!</h4>
            <WeatherForm onSubmit={props.onSubmit} />
            {!props.weather.wTemp ? <div className="pt-5"> There nothing </div> : <div className="pt-5">
                <div>
                    <h1>Information </h1>
                    <div className="alert alert-success">
                        <div className="row">
                            <div className="col-8">
                                <b>City: </b> {props.weather.wCity}, {props.weather.wCountry} <br />
                                <b>Temp: </b> {props.weather.wTemp}<sup>o</sup><br />
                                <b>Feels like: </b> {props.weather.wFeel}<sup>o</sup><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Weather;