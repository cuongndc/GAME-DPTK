export default {
    state: {
        info: {},
        proper: {},
        items: [],
        skill: [],
        map: {}
    },
    getters: {
        //
    },

    mutations: {
        SET_PLAYER(state, payload) {
            state.info = payload
            state.proper = payload.proper
            state.items = payload.items
        }
    },

    actions: {
        SET_PLAYER({ commit }, payload ) {
            commit('SET_PLAYER', payload)
        }
    },
}
