import {createRouter, createWebHistory} from 'vue-router';
import {defineComponent} from "vue";
import PageFirst from './pages/index/PageFirst.vue';
import Sampling from "./pages/list/Sampling.vue";

const routes = [
    { path: '/', component: PageFirst},
    { path: '/index', component: PageFirst},
    { path: '/sampling', component: Sampling},
    { path: '/list', component: Sampling},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;