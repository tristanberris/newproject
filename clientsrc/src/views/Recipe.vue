<template>
  <div>
    <p>{{recipe.title}}</p>
    <p>test</p>
  </div>
</template>

<script>
export default {
    name:"Recipe",
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
</style>