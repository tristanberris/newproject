<template>

    <!-- <p>{{recipe.title}}</p> -->
  <div class="home container-fluid row">
    <div class="col-xl-9 col-lg-9 col-md-12">
      <navbar class="row mb-3 mt-1" />
      <div class="left-side mb-5 ">
        <leftside> </leftside>
      </div>
    </div>
    <div class="col-3 right-side d-none d-lg-block d-md-block">
      <rightside class=""></rightside>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>

</template>

<script>
// import leftside from "../components/LeftSide.vue";
import Navbar from "../components/Navbar";
import rightside from "../components/RightSide.vue";
export default {
    name:"Recipe",
    components: {
        // leftside,
        Navbar,
        rightside
  },
    mounted(){
        this.$store.dispatch('setActiveRecipe', this.$route.params.recipeId)
    },
    computed:{
        recipe(){
            return this.$store.state.activeRecipe
        }
    },
    props: ["recipeId"]
};
</script>

<style>
.left-side {
  background-color: #2a2e32;
  color: white;
  border-radius: 30px;
  margin-left: 40px;
  margin-right: 40px;
}
.right-side {
  background-color: #2a2e32;
  color: white;
  border-radius: 30px;
}
.home {
  justify-content: space-between;
  margin: 0;
  padding: 0;
}
</style>