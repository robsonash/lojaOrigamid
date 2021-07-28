import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}]

export default router