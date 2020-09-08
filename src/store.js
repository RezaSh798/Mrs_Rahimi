import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);
Vue.use(axios);

const store = new Vuex.Store({
    state: {
        isAuthenticated: false,
        user: undefined,
        users: [],
        rol: 'admin',
        product: {},
        products: [],
        categories: [],
        pageCount: 0,

        error: '',
        // filter states
        categoryTitle: '',
    },
    getters: {
        pCategories(state) {
            let pCategories = [];
            function recursive(cat = state.categories) {
                cat.forEach(category => {
                  pCategories.push({
                    id: category.id,
                    title: category.title,
                  });
                  if(category.children.data.length > 0) {
                    return recursive(category.children.data);
                  }
                });
            }
            recursive();
            return pCategories;
        }
    },
    mutations: {
        // GET Requests
        getProductsPerPage( state, page = 1 ) {
            const user = JSON.parse(localStorage.getItem('user'));
            axios.get(`http://localhost:8000/api/v1/product?api_token=${user.api_token}&page=${page}`)
            .then(response => {
                state.products = response.data.data;
                state.pageCount = Math.ceil(response.data.meta.total / 9);
            })
            .catch(errors => {
                console.log(errors);
            })
        },
        getCategories( state ) {
            const user = JSON.parse(localStorage.getItem('user'));
            axios.get(`http://localhost:8000/api/v1/category?api_token=${user.api_token}`)
            .then( response => {
                state.categories = response.data.data;
            })
            .catch( errors => {
                console.log( errors );
            })
        },
        getUsers(state, page = 1) {
            const user = JSON.parse(localStorage.getItem('user'));
            axios.get(`http://localhost:8000/api/v1/user?api_token=${user.api_token}&page=${page}`)
            .then(response => {
                state.users = response.data.data[0];
                state.pageCount =  Math.ceil(response.data.meta.total / 10);
            })
            .catch(error => {
                console.log(error);
            })
        },
        getUser(state) {
            const user = JSON.parse(localStorage.getItem('user'));
            axios.get(`http://localhost:8000/api/v1/user/${user.id}?api_token=${user.api_token}`)
            .then(response => {
                state.user = {
                    id: response.data.data.id,
                    name: response.data.data.name,
                    family: response.data.data.family,
                    email: response.data.data.email,
                    phone_number: response.data.data.phone_number,
                    address: response.data.data.address,
                    avatar: response.data.data.avatar,
                    api_token: response.data.data.api_token,
                }
            })
            .catch(errors => {
                console.log(errors);
            })
        },
        // POST Requests
        register(state, newUser) {
            axios.post('http://localhost:8000/api/v1/register', {
                email: newUser.email,
                password: newUser.password,
                password_confirmation: newUser.password_confirmation
            })
            .then(response => {
                if(response.status == 201) {
                    state.isAuthenticated = true;
                    const user = {
                        id: response.data.data.id,
                        email: response.data.data.email,
                        password: newUser.password,
                        api_token: response.data.data.api_token
                    }
                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('login', 'true');
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
                    const user = {
                        id: response.data.data.id,
                        email: response.data.data.email,
                        password: oldUser.password,
                        api_token: response.data.data.api_token
                    }
                    localStorage.setItem('user', JSON.stringify(user));
                    localStorage.setItem('login', 'true');
                }
            })
            .catch(error => {
                console.log(error);
                state.error = error;
            });
        },
        logOut(state) {
            localStorage.setItem('login', 'false');
            state.isAuthenticated = false;
        },
        createPruduct(state, product) {
            const user = JSON.parse(localStorage.getItem('user'));
            axios.post(`http://localhost:8000/api/v1/product?api_token=${user.api_token}`, product.body)
            .then(response => {
                if(response.status == 200) {
                    const id = response.data.data;
                    let fd = new FormData();
                    fd.append('api_token', user.api_token);
                    for (let index = 0; index < product.productImages.length; index++) {
                        fd.append('images[]', product.productImages[index]);                        
                    }
                    axios.post(`http://localhost:8000/api/v1/upload/${id}`, fd, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(response => {
                        alert(response.data.data);
                    })
                    .catch(error => {
                        console.log(error);
                    })
                }
                alert(response.data.message);
            })
            .catch(error => {
                console.log(error);
            })
        },
        createCategory(state, newCategory) {
            const user = JSON.parse(localStorage.getItem('user'));
            axios.post(`http://localhost:8000/api/v1/category?api_token=${user.api_token}`, newCategory)
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
        updateUser(state, user) {
            let uploadUser = new FormData();
            uploadUser.append('_method', 'PUT');
            uploadUser.append('email', user.email);
            uploadUser.append('name', user.name);
            uploadUser.append('family', user.family);
            uploadUser.append('phone_number', user.phone_number);
            uploadUser.append('address', user.address);
            uploadUser.append('avatar', user.avatar);
            
            axios.post(`http://localhost:8000/api/v1/user/${user.id}?api_token=${user.api_token}`, uploadUser)
            .then(response => {
                alert(response.data.data);
            })
            .catch(errors => {
                console.log(errors);
            });
        },
        // PUT Request
        updateCategory( state, update ) {
            const user = JSON.parse(localStorage.getItem('user'));
            axios({
                method: 'PUT',
                url: `http://localhost:8000/api/v1/category/${update.id}?api_token=${user.api_token}`,
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
            const user = JSON.parse(localStorage.getItem('user'));
            axios.delete( `http://localhost:8000/api/v1/category/${id}?api_token=${user.api_token}`)
            .then(response => {
                alert(response.data.data);
            })
            .catch(errors => {
                console.log(errors);
            })
        },
        deleteProducts(state, products) {
            const user = JSON.parse(localStorage.getItem('user'));
            axios.delete(`http://localhost:8000/api/v1/product?api_token=${user.api_token}`, products)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
        },
        deleteUsers(state, users) {
            const user = JSON.parse(localStorage.getItem('user'))
            axios.delete(`http://localhost:8000/api/v1/user?api_token=${user.api_token}`, users)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
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
        getUsers({commit}, payload) {
            commit('getUsers', payload);
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
        logOut({commit}) {
            commit('logOut');
        },
        shopFilters({commit}, payload) {
            commit('shopFilters', payload);
        },
        // PUT
        updateCategory({ commit }, payload) {
            commit('updateCategory', payload);
        },
        updateUser({commit}, payload) {
            commit('updateUser', payload);
        },
        // DELETE
        deleteCategory({commit}, payload) {
            commit('deleteCategory', payload);
        },
        deleteProducts({commit}, payload) {
            commit('deleteProducts', payload);
        },
        deleteUsers({commit}, payload) {
            commit('deleteUsers', payload);
        }
    }
});

export default store;