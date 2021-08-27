import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
// import Categorias from '../views/Categorias.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/matenimiento',
    name: 'Matenimiento',
    component: () => import(/* webpackChunkName: "matenimiento" */ '../views/Matenimiento.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: () => import(/* webpackChunkName: "categorias" */ '../views/Categorias.vue')
  },
  {
    path: '/userAdmin',
    name: 'UserAdmin',
    component: () => import(/* webpackChunkName: "userAdmin" */ '../views/UserAdmin.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
