import { createRouter, createWebHistory } from 'vue-router'
import AddView from "../views/AddView.vue"
import MainView from "../views/MainView.vue"
import AddtaskView from "../views/AddtaskView.vue"

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
    },
    {
        path: '/AddTask',
        name: 'AddTask',
        component: AddtaskView,
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;