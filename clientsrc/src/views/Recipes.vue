<template>
  <div class="container-fluid row recipe-container">
    <navbar class="col-12  "></navbar>
    <div
      class
      v-for="recipepreview in recipepreviews"
      :recipeId="recipepreview._id"
      :key="recipepreview.id"
    >
      <div class="col-4 pt-2 align">
        <router-link
          @click="setActiveRecipe(recipepreview._id)"
          :to="{name: 'recipe', params: {recipeId: recipepreview.id}}"
        >
          <div class="card card-shadow" style="width: 18rem;">
            <img class="card-img-top card-image" :src="recipepreview.image" alt="Card image cap" />
            <div class="card-body">
              <!-- <a href="#" class="stretched-link">
              </a>-->
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
.card-image{
  object-fit: cover;
  width: 100%;
  max-height: 220px;
}
.card-shadow{
}
.card-shadow:hover{
  box-shadow: 6px 6px rgb(128, 128, 128);
  transition: background-color .4s;

}
</style>