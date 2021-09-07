import { createStore } from "vuex"

export default createStore({

  state: {
    user: null
  },

  // are functions that effect the state
  mutations: {
    SET_USER(state, user) {
      state.user = user
    }
  },

  // Action are the functions that we call through our applicaion that call mutations
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user)
    }
  },

  modules: {

  }
})
