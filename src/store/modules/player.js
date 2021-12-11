export default {
    state: {
        info: {}
    },
    getters: {
        //
    },

    mutations: {
        SET_PLAYER(state, payload) {
            state.info = payload
        }
    },

    actions: {
        SET_PLAYER({ commit, state }, payload ) {
        }
    },
}
