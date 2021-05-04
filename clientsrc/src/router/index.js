import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Create from "../views/Create.vue"
import Recipes from "../views/Recipes.vue"
import Recipe from "../views/Recipe.vue"




Vue.use(Router)

var routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  
 
  {
    path: '/create',
    name: 'create',
    component: Create,
    props: true,
  },
  {
    path: '/recipes',
    name: 'recipes',
    component: Recipes,
    props: true,
  },
  {
    path: '/recipes/:recipeId',
    name: 'recipe',
    component: Recipe,
    props: true,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: "*",
    redirect: '/'
  }
]


const router = new Router({
  routes
})

export default router
