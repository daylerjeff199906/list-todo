import { createRouter, createWebHistory } from 'vue-router'
import AddView from "../views/AddView.vue"
import MainView from "../views/MainView.vue"

const routes = [
    {
        path: '/',
        name: 'Main',
        component: MainView,
    },
    {
        path: '/Add',
        name: 'Add',
        component: AddView,
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;