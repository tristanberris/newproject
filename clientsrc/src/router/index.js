import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Create from "../views/Create.vue"




Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/:create',
    name: 'Create',

    component: Create
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
  }
]

const router = new Router({
  routes
})

export default router
