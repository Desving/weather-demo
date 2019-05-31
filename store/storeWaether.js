import axios from 'axios';

export const state = () => ({
    arCityWeater: [],
    id: 0,
    errors: []
});

export const mutations = {
    ADD_CITY (state, payload) {
        state.errors = [];
        state.id += 1;
        state.arCityWeater.push(
            {
                info: payload,
                id: state.id
            });
    },
    ERROR_COORDINATES (state) {
        state.errors.push(
            {
                message: 'Таких координат не существует'
            }
        )
    },
    DELETE_CITY (state, id) {
        state.arCityWeater.find((element, index, array) => {
                if (element.id == id) {
                    return array.splice(index, 1)
                }
            }
        );
    }
};

export const actions = {
    addCityOnCoord  (state, crd) {
        let request = 'http://api.openweathermap.org/data/2.5/weather?lat='
            + crd.latitude
            + '&lon='
            + crd.longitude + '&appid='
            + 'e9c75f6dc1027a3488ea4818c1932495';
        axios
            .get(request)
            .then(response => (this.commit('storeWaether/ADD_CITY', response)))
            .catch(response => (this.commit('storeWaether/ERROR_COORDINATES', response)));
    },
    deleteCityWeather  (state, id) {
        this.commit('storeWaether/DELETE_CITY', id)
    },
};