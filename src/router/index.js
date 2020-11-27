import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Auth from '../components/Auth.vue'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
        {
        path: '/',
        component: Login
        },
        {
        path: '/auth',
        component: Auth
        }
    ]
})

export default router
