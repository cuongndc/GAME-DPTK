import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import PlayerInfo from '@/views/PlayerInfo.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/player/:id',
        name: 'Player',
        component: PlayerInfo
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
