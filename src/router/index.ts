import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import store from '@/store';
import { Route } from '@/router/constatns';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        children: [
            {
                path: '',
                name: Route.Catalog,
                component: () => import(/* webpackChunkName: "catalog" */ 'views/Catalog.vue'),
                props: async (route) => {
                    await store.dispatch('catalog/fetchCatalog', {
                        page: route.query.page,
                        ...route.query.search ? { search: route.query.search } : {},
                    });
                },
            },
        ],
    },
    {
        path: `/${Route.Delivery}`,
        name: Route.Delivery,
        component: {
            template: '<div>Delivery Page</div>'
    },
    },
    {
        path: `/${Route.Payment}`,
        name: Route.Payment,
        component:
        {

            template: '<div>Payment Page</div>'
        },
    },
    {
        path: `/${Route.Contacts}`,
        name: Route.Contacts,
        component:
        {

            template: '<div>Contacts Page</div>'
        },
    },
    {
        path: `/${Route.About}`,
        name: Route.About,
        component:
        {

            template: '<div>About Page</div>'
        },
    },
    {
        path: '*',
        name: '404',
        component: () => import(/* webpackChunkName: "404" */ 'views/NotFound.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    if (!to.matched.length) {
        next({ name: '404' });
    } else {
        next();
    }
});

export default router;
