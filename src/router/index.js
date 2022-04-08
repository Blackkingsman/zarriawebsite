import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products/:pid',
    name: 'viewProduct',
    component: () => import ('../views/ProductView.vue')
  },
  {
    path: '/my-account',
    name: 'myAccount',
    component: () => import('../views/MyAccount.vue')
  },
  {
    path: '/cart',
    name: 'myCart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/checkout',
    name: 'checkOut',
    component: () => import ('../views/CheckoutView.vue')
  },
  {
    path: '/shop',
    name: 'myShop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ShopView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
