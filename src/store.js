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
        products: [],
        categories: [],

        pageCount: 0,
    },
    mutations: {
        // GET Requests
        getProductsPerPage( state, page = 1 ) {
            axios.get(`http://localhost:8000/api/v1/product?page=${page}`)
            .then(response => {
                state.products = response.data.data;
                state.pageCount = Math.ceil(response.data.meta.total / 9);
            })
            .catch(errors => {
                console.log(errors);
            })
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
        getUser() {
            console.log('we are in getUser mutation !');
        },
        // POST Requests
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
        createPruduct(state, product) {
            const newProduct = product;
            newProduct.images = new FormData();
            newProduct.images.append('images', product.images, 'uploadingImages');
            axios.post('', newProduct)
                .then(res => {
                console.log(res);
            });
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
        // PUT Request
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
        // DELETE Requests
        deleteCategory( state, id ) {
            axios.delete( `http://localhost:8000/api/v1/category/${id}`)
            .then(response => {
                alert(response.data.data);
            })
            .catch(errors => {
                console.log(errors);
            })
        },
    },
    actions: {
        // GET Actions
        getProductsPerPage({commit}, payload) {
            commit('getProductsPerPage', payload);
        },
        getUser({commit}) {
            commit('getUser');
        },
        getCategories({ commit }) {
            commit('getCategories');
        },
        // POST Actions
        createPruduct({ commit }, payload) {
            commit('createPruduct', payload);
        },
        createCategory({ commit }, payload) {
            commit('createCategory', payload);
        },
        register({ commit }, payload) {
            commit('register', payload);
        },
        login({ commit }, payload) {
            commit('login', payload);
        },
        // PUT Actions
        updateCategory({ commit }, payload) {
            commit('updateCategory', payload);
        },
        // DELETE Actions
        deleteCategory({commit}, payload) {
            commit('deleteCategory', payload);
        },
    }
});

export default store;