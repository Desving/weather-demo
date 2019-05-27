import axios from 'axios';

export const state = () => ({
    arCityWeater: [],
    id: 0
});

export const mutations = {
    ADD_CITY (state, payload) {
        state.arCityWeater.push(
            {
                info: payload,
                id: state.id
            });
    },
    INCREMENT_ID (state, id) {
        state.id++;
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
            .then(response => (this.commit('storeWaether/ADD_CITY', response)));
    },
    incrementId() {
        this.commit('storeWaether/INCREMENT_ID')
    }
};