import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import PlayerInfo from '@/views/PlayerInfo.vue'
import Map from '@/views/Map.vue'
import AttackMonitor from '@/views/monster/AttackMonitor.vue'
import Register from '@/views/register.vue'
import Login from '@/views/login.vue'
import Index from '@/views/index.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/index',
        name: 'Index',
        component: Index
    },
    {
        path: '/player/:id',
        name: 'Player',
        component: PlayerInfo
    },
    {
        path: '/map/:id',
        name: 'Map',
        component: Map
    },
    {
        path: '/attack_monitor/:monster_id',
        name: 'AttackMonitor',
        component: AttackMonitor,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
