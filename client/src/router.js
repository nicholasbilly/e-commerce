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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
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
