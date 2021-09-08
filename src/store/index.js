import { createStore } from "vuex"
import { UserModule } from "./User"

export default createStore({

  state: {
  },

  // are functions that effect the state
  mutations: {
  },

  // Action are the functions that we call through our applicaion that call mutations
  actions: {
  },

  // modules for individual state management using vuex
  // UserModule will be loaded as User
  modules: {
    User: UserModule
  }
})
