import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showRecipe: false,
    showSearch: true,
    selectedRecipe: {},
    searchResponse: []
  },
  getters: {
    getShowRecipe(state) {
      return state.showRecipe
    },
    getShowSearch(state) {
      return state.showSearch
    },
    getRecipe(state) {
      return state.selectedRecipe
    },
    getSearchResponse(state) {
      return state.searchResponse
    }
  },
  mutations: {
    showRecipe(state, payload) {
      state.showRecipe = payload
    },
    showSearch(state, payload) {
      state.showSearch = payload
    },
    selectRecipe(state, payload) {
      state.selectedRecipe = payload
    },
    searchResponse(state, payload) {
      state.searchResponse = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
