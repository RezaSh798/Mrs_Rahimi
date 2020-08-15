import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);
Vue.use(axios);

const store = new Vuex.Store({
    state: {
        isAuthenticated: false,
        user: {
            name: '',
            pass: null,
            confirmPass : null,
            email : '',
            rememberMe : false,
            rol: '',
        },
    },
    mutations: {
        register(state, newUser) {
            axios.post('', newUser)
                .then(res => {
                    if(res) {
                        state.isAuthenticated = true;
                        state.user = newUser;
                    } else {
                        console.log(res.err);
                    }
                });
        },
        login(state, oldUser) {
            axios.post('', oldUser)
            .then(res => {
                if(res) {
                    state.user = res.user;
                    state.isAuthenticated = true;
                } else {
                    console.log(res.err);
                }
            });
        }
    }
});

export default store;