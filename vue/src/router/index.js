import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import SignIn from '../components/SignIn.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/signin',
            component: SignIn
        }
    ]
})

export default router;