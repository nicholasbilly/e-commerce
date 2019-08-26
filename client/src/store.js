import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const url = 'http://34.67.162.136'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogin: false,
        page: 'login',
        products: [],
        cart: [],
        count: 0
    },

    mutations: {
        GETPRODUCTS(state, payload) {
            state.products = payload
        },

        CHANGEPAGE(state, payload) {
            state.page = payload
        },

        CHANGELOGIN(state, payload) {
            state.isLogin = payload
        },

        ADDTOCART(state, payload) {
            state.cart.push(payload)
        },

        ADDCOUNT(state, payload) {
            state.count += payload
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