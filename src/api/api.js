import * as axios from 'axios';


export const getWeather = (name) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=18ef8bad80aea30cbf1fc127fedc66d7`)
        .then(response => response.data)
}