import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const routes = [
    {
        path: '/',
        name: 'Home',
        alias: ['/h', '/o'],
        component: Home,
        meta: {
            title: 'this is home',
        }
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
        alias: '/a',
        component: () => import('../views/About.vue'),
        meta: {
            title: 'this is About',
        },
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
                alias: 'p/:id',
                // redirect: to => ({ path: '/user/article', query: { id: 700, name: '月紫アリア' } }),
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

router.beforeEach((to, from) => {
    // console.log(to.fullPath, from.fullPath);
    document.title = to.meta.title;
});

router.afterEach((to, from) => {

});
export default router;
