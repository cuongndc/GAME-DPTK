export default {
    state: {
        info: {}
    },
    getters: {
        //
    },

    mutations: {
        SET_PLAYER(state, payload) {
            console.log("payload", payload)
            state.info = payload
        }
    },

    actions: {
        SET_PLAYER({ commit }, payload ) {
            commit('SET_PLAYER', payload)
        }
    },
}
