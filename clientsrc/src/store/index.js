import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    activeRecipe: {},
    recipes: []
  },
  mutations: {
    setActiveRecipe(state, activeRecipe) {
      state.activeRecipe = activeRecipe
    },
    setRecipes(state, recipes){
      state.recipes = recipes
    }
  },
  actions: {
    async addRecipe({commit,dispatch}, recipe){
      try {
        let res = await api.post('recipes', recipe)
        console.log("add list", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getActiveRecipe({commit, dispatch}, recipeId){
      try {
        let res = await api.get(`recipes/${recipeId}`)
        commit('setActiveRecipe', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getRecipes({commit, dispatch}){
      try {
        let res = await api.get('recipes')
        console.log(res.data)
        commit('setRecipes', res.data)
      } catch (error) {
        console.error(error)
      }
    }

  },
  
  modules: {
  }
})
