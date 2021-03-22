<template>
  <div id="app" class="container-fluid">
    

      <!-- <home class="row home" /> -->
      <router-view></router-view>

  </div>
</template>
<script>

import Home from "./views/Home"
import Create from "./views/Create.vue"

export default {
    components: {
    Home,
    Create
  }
}

</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
html, body {
  font-family: 'Roboto', sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family:'Roboto', sans-serif

}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#app{
  padding: 0px;
  background-color: #212529;
}


</style>
