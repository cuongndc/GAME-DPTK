export default {
    state: {
        info: {}
    },
    getters: {
        //
    },

    mutations: {
        SET_USER(state, payload) {
            console.log("payload", payload)
            state.info = payload
        }
    },

    actions: {

    },
}
