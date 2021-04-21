<template>
  <div>
    <div class="col-4 pt-2">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="https://picsum.photos/300/300" alt="Card image cap" />
        <div class="card-body">
          <p class="card-text">
              {{recipeData.title}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "RecipePreview",
    props: ['recipeData'],
    mounted(){
        this.$store.dispatch("getRecipes", this.recipeData._id)
        console.log(recipeData)
    }
};
</script>

<style>
.card-text{
  color: black
}
</style>