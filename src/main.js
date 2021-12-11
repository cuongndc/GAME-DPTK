import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

window.GAME_ROUTER_PARAMS = router.currentRoute.value.params

createApp(App).use(router).use(store).mount('#app')
