import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
        // components: {
        //     default: Home,
        //     About: () => import("../views/About.vue"),
        //     User: () => import("../views/User.vue"),
        // }
    },
    {
        path: '/home',
        redirect: { name: 'Home' },
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('../views/User.vue'),
        children: [
            {
                path: '',
                // redirect: '/user/order',
                redirect: { name: 'MySetting' },
            },
            {
                path: 'order',
                name: 'MyOrder',
                component: () => import("../views/MyOrder.vue"),
            },
            {
                path: 'setting',
                name: 'MySetting',
                component: () => import("../views/MySetting.vue"),
            },
            {
                path: 'page/:id',
                name: 'MyPage',
                component: () => import("../views/MyPage.vue"),
            },
            {
                path: 'article',
                name: 'MyArticle',
                component: () => import("../views/MyArticle.vue"),
            }
        ],
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
