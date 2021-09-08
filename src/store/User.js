export const UserModule = {
  namespaced: true,

  state: {
    user: null
  },

  // are functions that effect the state. Cant update the state directly, only mutations can do it
  mutations: {
    SET_USER(state, user) {
      state.user = user
    }
  },

  // Action are the functions that we call through our applicaion that call mutations.
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user)
    }
  }
}
