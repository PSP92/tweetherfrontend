import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Main from '../views/Main.vue'
import UserPage from '../views/UserPage.vue'
import Search from '../views/Search.vue'
import Notifications from '../views/Notifications.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
    props: true
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    props: true
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    props: true
  },
  {
    path: '/userpage',
    name: 'UserPage',
    component: UserPage,
    props: true
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    props: true
  },
  {
    path: '/notifcations',
    name: 'Notifications',
    component: Notifications,
    props: true
  },
]

const router = new VueRouter({
  routes
})

export default router
