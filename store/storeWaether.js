import axios from 'axios';

export const state = () => ({
    arCityWeater: []
});

export const mutations = {
    ADD_CITY (state, payload) {
        console.log('payload');
        console.log(payload);
        state.arCityWeater.push(payload);
    },
    toggle (state, todo) {
        todo.done = !todo.done
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
    }
};