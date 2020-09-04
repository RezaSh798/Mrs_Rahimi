import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);
Vue.use(axios);

const store = new Vuex.Store({
    state: {
        isAuthenticated: false,
        user: {
            rol: 'admin',
        },
        product: {},
        products: [],
        categories: [],
        pageCount: 0,
        // filter states
        categoryTitle: '',
    },
    mutations: {
        // GET Requests
        getProductsPerPage( state, page = 1 ) {
            axios.get(`http://localhost:8000/api/v1/product?page=${page}`)
            .then(response => {
                state.products = response.data.data;
                state.pageCount = Math.ceil(response.data.meta.total / 9);
                console.log(state.products);
            })
            .catch(errors => {
                console.log(errors);
            })
        },
        getCategories( state ) {
            axios.get('http://localhost:8000/api/v1/category')
                .then( response => {
                    state.categories = response.data.data;
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
            console.log(newUser);
            axios.post('http://localhost:8000/api/v1/register', {
                email: newUser.email,
                password: newUser.password,
                password_confirmation: newUser.password_confirmation
            })
            .then(response => {
                if(response.status == 201) {
                    state.isAuthenticated = true;
                    state.user = response.data.data;
                    state.user.password = newUser.password;
                    localStorage.setItem('user', JSON.stringify(state.user));
                    if(newUser.rememberMe) localStorage.setItem('remember', 'true');
                }
            })
            .catch(error => {
                console.log(error);
            });
        },
        login(state, oldUser) {
            axios.post('http://localhost:8000/api/v1/login', {
                email: oldUser.email,
                password: oldUser.password,
            })
            .then(response => {
                if(response.status == 200) {
                    state.isAuthenticated = true;
                    state.user = response.data.data;
                    state.user.password = oldUser.password;
                    localStorage.setItem('user', JSON.stringify(state.user));
                    if(oldUser.rememberMe) {
                        localStorage.setItem('remember', 'true');
                    }
                }
            })
            .catch(error => {
                console.log(error);
            });
        },
        createPruduct(state, product) {
            const newProduct = product;
            newProduct.images = new FormData();
            newProduct.images.append('images', product.images, 'uploadingImages');
            axios.post('', newProduct)
                .then(response => {
                console.log(response);
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
        shopFilters(state, priceRange) {
            console.log(state.categoryTitle);
            console.log(priceRange);
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
        // SET STATES
        categoryFilter(state, categoryTitle) {
            state.categoryTitle = categoryTitle;
        },
        product(state, product) {
            state.product = product;
        }
    },
    actions: {
        // GET
        getProductsPerPage({commit}, payload) {
            commit('getProductsPerPage', payload);
        },
        getUser({commit}) {
            commit('getUser');
        },
        getCategories({ commit }) {
            commit('getCategories');
        },
        // POST
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
        shopFilters({commit}, payload) {
            commit('shopFilters', payload);
        },
        // PUT
        updateCategory({ commit }, payload) {
            commit('updateCategory', payload);
        },
        // DELETE
        deleteCategory({commit}, payload) {
            commit('deleteCategory', payload);
        },
    }
});

export default store;