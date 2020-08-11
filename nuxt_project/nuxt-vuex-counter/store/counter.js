export const state = () => ({
    counter: 0,
})

export const mutations = {
    countUp: function(state) {
        state.counter++
    },
    countDown: function(state) {
        state.counter--
    },
    countReset: function(state) {
        state.counter = 0
    }
}