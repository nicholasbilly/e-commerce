import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Shop from './views/Shop.vue'
import Admin from './views/Admin.vue'
import EditProduct from './components/EditProduct.vue'
import oneProduct from './views/oneProduct.vue'
import Cart from './components/Cart.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
      children: [
        {
          path: ':id',
          component: oneProduct
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },
    {
      path: '/admin/:id',
      name: 'edit',
      component: EditProduct
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})
