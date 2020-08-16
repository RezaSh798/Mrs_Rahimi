import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);
Vue.use(axios);

const store = new Vuex.Store({
    state: {
        isAuthenticated: true,
        user: {
            name: '',
            pass: null,
            confirmPass : null,
            email : '',
            rememberMe : false,
            rol: 'admin',
        },
        products: {},

        // filters
        categories: {},
        brands: {},
        price: null,
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
        },
        shop(state) {
            // get products from server
            axios.get('')
                .then(res => {
                    if(res) {
                        state.products = res.data.products;
                    } else {
                        console.log(res.err);
                    }
                });
            // get categories from server
            axios.get('')
                .then(res => {
                    if(res) {
                        state.categories = res.data.categories;
                    } else {
                        console.log(res.err);
                    }
                });
            // get brands from server
            axios.get('')
                .then(res => {
                    if(res) {
                        state.brands = res.data.brands;
                    } else {
                        console.log(res.err);
                    }
                });
        },
        createPruduct(product) {
            const newProduct = product;
            newProduct.images = new FormData();
            newProduct.images.append('images', product.images, 'uploadingImages');
            axios.post('', newProduct)
                .then(res => {
                console.log(res);
            });
        }
    },
    actions: {
        register({ commit }, payload) {
            commit('register', payload);
        },
        login({ commit }, payload) {
            commit('login', payload);
        },
        shop({ commit }) {
            commit('shop');
        },
        createPruduct({ commit }, payload) {
            commit('createPruduct', payload);
        }
    }
});

export default store;

// ,
// {
//     onUploadProgress : uploadEvent => {
//     console.log('upload progress: ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%')
//     }
// }