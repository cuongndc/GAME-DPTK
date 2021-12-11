import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import PlayerInfo from '@/views/PlayerInfo.vue'
import Map from '@/views/Map.vue'


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
    },
    {
        path: '/map/:id',
        name: 'Map',
        component: Map
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
