import Vue from 'vue';
import Router from 'vue-router';

import Register from './views/Register.vue';
import Logo from './views/Logo.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path:'/',
            name:'home',
            component:Logo
        },
        {
            path:'/register',
            name: 'register',
            component: Register
        },
    ],
});