import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isAuthenticated: true,
        user: {
            id: 1,
            name: 'RezaSh798',
            pass: 123123123,
            rol: 'admin'
        },
    }
});

export default store;