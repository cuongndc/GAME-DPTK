import { createStore } from 'vuex'
import player from '@/store/modules/player'
import user from '@/store/modules/user'

const store = createStore({
    modules: {
        player,
        user,
    },
})

export default store
