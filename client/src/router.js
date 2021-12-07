import Vue from 'vue';
import Router from 'vue-router';

import Register from './views/Register.vue';
import Login from './views/Login.vue';
import Projects from './views/Projects.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path:'/',
            name:'projects',
            component:Projects
        },
        {
            path:'/register',
            name: 'register',
            component: Register
        },
        {
            path:'/login',
            name: 'login',
            component: Login
        },
    ],
});