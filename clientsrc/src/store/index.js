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
  },
  mutations: {
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
  },
  modules: {
  }
})
