import { createApp } from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Login from './components/Login.vue'
import Auths from './components/Auth.vue'

const routes = [
    { path: '/', component: Login },
    { path: '/auth', component: Auths }    
];

const router = new VueRouter({ routes });

createApp(App).use(router).mount('#app');