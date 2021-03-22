import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async addRecipe({commit,dispatch}, recipe){
      try {
        let res = await api.post('recipes', recipe)
        console.log("add list", res.data)
        dispatch('getLists', res.data.boardId)
      } catch (error) {
        console.error(error)
      }
    },
  },
  modules: {
  }
})
