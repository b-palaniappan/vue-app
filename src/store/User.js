export const UserModule = {
  namespaced: true,

  state: {
    user: null
  },

  // are functions that effect the state. Cant update the state directly, only mutations can do it
  // Mutations are only for sync operations.
  mutations: {
    SET_USER(state, user) {
      state.user = user
    }
  },

  // Action are the functions that we call through our applicaion that call mutations.
  // For any async operations like calling api to get data have to be done using actions only. Action can call mutations to update the state
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user)
    }
  }
}
