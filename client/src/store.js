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
            for(let i = 0; i < payload.length; i++) {
                state.cart.push(payload[i])
            }
        },

        EMPTYCART(state) {
            state.cart = []
        },

        ADDCOUNT(state, payload) {
            state.count += payload
        },

    },

    actions: {
        getProducts(context) {
            let token = localStorage.getItem('token')
            axios.get(`${url}/products`, {headers: {token}})
            .then(({data}) => {
                 context.commit('GETPRODUCTS', data)
            })
            .catch(console.log)
        },

        getCart(context) {
            let token = localStorage.getItem('token')
            axios.get(`http://34.67.162.136/carts`, {headers: {token}})
            .then(({data}) => {
                // console.log(data.products[0].name)
                context.commit('ADDTOCART', data.products)
            })
        },

        removeProduct(context, payload) {
            let token = localStorage.getItem('token')
            // console.log(payload)
            axios.patch(`http://34.67.162.136/carts/${payload}/remove`, {}, {headers: {token}})
            .then(({data}) => {
                context.dispatch('getCart')
            })

        }
    }
})