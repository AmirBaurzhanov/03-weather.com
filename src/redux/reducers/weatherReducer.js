import { getWeather } from "../../api/api";

const SET_WEATHER = "weather/SET-WEATHER";
const TOGGLE_IS_FETCHING = "weather/TOGGLE-IS-FETCHING";

let initialState = {
    wData: {
        wTemp: '',
        wFeel: '',
        wCity: '',
        wCountry: '',
    },
    isFetching: false
};

export const wReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER:
            let newData = {
                wTemp: action.wTemp,
                wFeel: action.wFeel,
                wCity: action.wCity,
                wCountry: action.wCountry,
            }
            return {
                ...state, wData: newData
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state
    };
}

// Action Creators
export const setWeatherAC = (wTemp, wFeel, wCity, wCountry) => ({ type: SET_WEATHER, wTemp, wFeel, wCity, wCountry });
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const setWeatherTC = (name) => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    let response = await getWeather(name);
    dispatch(setWeatherAC(
        Math.ceil(response.main.temp),
        Math.ceil(response.main.feels_like),
        response.name,
        response.sys.country
    )
    )
    dispatch(toggleIsFetchingAC(false));
}