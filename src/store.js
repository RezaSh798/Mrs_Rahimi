import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isAuthenticated: false,
        user: {
            id: 1,
            name: 'RezaSh798',
            pass: 123123123,
            rol: 'admin'
        },
    }
});

export default store;