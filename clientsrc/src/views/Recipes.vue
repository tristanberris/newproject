<template>
  <div class="container-fluid row recipe-container">
    <!-- <div class="col-4">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://picsum.photos/300/300" alt="Card image cap" />
        <div class="card-body">
          <p
            class="card-text"
          >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div> -->

    <recipepreview v-for="recipepreview in recipepreviews" :recipeData="recipepreview" :key="recipepreview._id"></recipepreview>
    
    </div>
</template>

<script>
import recipepreview from "../components/RecipePreview.vue"
export default {
  name: "recipes",
  mounted(){
        this.$store.dispatch('getRecipes')
  },
  computed:{
    recipepreviews(){
          return this.$store.state.recipes
    }
  },
  components:{
    recipepreview
  }
};
</script>

<style>
.recipe-container{
  justify-content: center;
}
</style>