import { createStore } from 'vuex'
import player from '@/store/modules/player'

const store = createStore({
    modules: {
        player,
    },
})

export default store
