import { createApp } from 'vue'
import App from './App.vue'
import VueUniversalModal from 'vue-universal-modal'
import router from './router'
import store from './store'
import './index.css'
import 'vue-universal-modal/dist/index.css'

createApp(App).use(VueUniversalModal, {
    teleportTarget: '#modals'
}).use(router).use(store).mount('#app')
