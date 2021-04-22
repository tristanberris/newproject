<template>
  <div>
    <div class="col-4 pt-2 align">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://picsum.photos/300/300" alt="Card image cap" />
        <div class="card-body">
          <a href="#" class="stretched-link">
            <!-- <router-link 
            @click="setActiveRecipe(recipe._id)"
            :to="{name: 'recipe', params: {recipeId: recipe.id}}"
            >

            </router-link> -->
          </a>
          <p class="card-text">{{recipeData.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipePreview",
  props: ["recipeData"],
  mounted() {
    // this.$store.dispatch("getRecipes", this.recipeData._id)
    console.log(this.$route.params.id)
    // this.$store.dispatch('setActiveRecipe', this.$route.params.id)

  },
  computed:{
    recipe(){
      // return this.$store.state.activeRecipe
    }
  }
};
</script>

<style>
.card-text {
  color: black;
}
.align {
}
</style>