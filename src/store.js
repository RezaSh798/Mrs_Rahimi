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
        categories: [],
        brands: [],
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
        createPruduct(state, product) {
            const newProduct = product;
            newProduct.images = new FormData();
            newProduct.images.append('images', product.images, 'uploadingImages');
            axios.post('', newProduct)
                .then(res => {
                console.log(res);
            });
        },
        getCategories( state ) {
            axios.get('http://localhost:8000/api/v1/category')
                .then( response => {
                    state.categories = response.data.data;
                    // response.data.data.forEach( category => {
                    //     state.categories.push( category.title );
                    // });
                })
                .catch( errors => {
                    console.log( errors );
                })
        },
        createCategory(state, newCategory) {
            axios.post('http://localhost:8000/api/v1/category', newCategory)
            .then(response => {
                alert(response.data.data);
            })
            .catch(errors => {
                console.log(errors);
            })
        },
        updateCategory( state, update ) {
            axios({
                method: 'PUT',
                url: `http://localhost:8000/api/v1/category/${update.id}`,
                headers: {
                    'Accept': 'application/json'
                },
                data: {
                    title: update.name
                }
            })
            .then( response => {
                alert( response.data.data );
                return response;
            })
            .catch( errors => {
                console.log( errors )
            });
        },
        deleteCategory( state, id ) {
            axios.delete( `http://localhost:8000/api/v1/category/${id}`)
            .then(response => {
                alert(response.data.data);
            })
            .catch(errors => {
                console.log(errors);
            })
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
        },
        getCategories({ commit }) {
            commit('getCategories');
        },
        createCategory({ commit }, payload) {
            commit('createCategory', payload);
        },
        updateCategory({ commit }, payload) {
            commit('updateCategory', payload);
        },
        deleteCategory({commit}, payload) {
            commit('deleteCategory', payload);
        }
    }
});

export default store;