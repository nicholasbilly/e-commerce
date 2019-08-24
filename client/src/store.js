import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const url = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogin: false,
        page: 'login',
        products: [],
    },

    mutations: {
        GETPRODUCTS(state, payload) {
            state.products = payload
        }
    },

    actions: {
        getProducts(context) {
            let token = localStorage.getItem('token')
            axios.get(`${url}/products`, {headers: {token}})
            .then(({data}) => {
                 context.commit('GETPRODUCTS', data)
            })
            .catch(console.log)
        }
    }


})