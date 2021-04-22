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
    </div>-->

    <div
      class
      v-for="recipepreview in recipepreviews"
      :recipeId="recipepreview._id"
      :key="recipepreview.id"
    >
      <div class="col-4 pt-2 align">

              <router-link 
                @click="setActiveRecipe(recipepreview._id)"
                :to="{name: 'recipe', params: {recipeId: recipepreview.id}}">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="https://picsum.photos/300/300" alt="Card image cap" />
          <div class="card-body">
            <!-- <a href="#" class="stretched-link">
            </a> -->
            <p class="card-text">{{recipepreview.title}}</p>
            <!-- <p class="card-text">:)</p> -->
          </div>
        </div>
              </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import recipepreview from "../components/RecipePreview.vue";
export default {
  name: "recipes",
  mounted() {
    this.$store.dispatch("getRecipes");
  },
  computed: {
    recipepreviews() {
      return this.$store.state.recipes;
    }
  },
  components: {
    recipepreview
  }
};
</script>

<style>
.recipe-container {
  justify-content: center;
}
</style>