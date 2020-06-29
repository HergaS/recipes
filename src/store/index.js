import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedRecipe: {}
  },
  getters: {
    getRecipe(state) {
      return state.selectedRecipe
    }
  },
  mutations: {
    selectRecipe(state, payload) {
      state.selectedRecipe = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
