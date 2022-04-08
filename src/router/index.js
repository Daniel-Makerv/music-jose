import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Galeria from '../views/Galeria.vue'
import About from '../views/About.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/galeria',
    name: 'galeria',
    component: Galeria
  },
  {
    path: '/info',
    name: 'info',
    component: About
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
