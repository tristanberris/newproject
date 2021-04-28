<template>
  <div class="spacing">
    <img class="pb-3 banner banner-image" :src="recipe.image" alt />
    <h1 class="p-3">{{recipe.title}}</h1>
    <ol>
      <li
        class="inglist"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum libero, sed et repudiandae incidunt atque earum animi culpa, sunt ipsum alias, ullam nostrum expedita placeat beatae quasi corrupti modi odio.</li>
      <li class="inglist">{{recipe.steps}}</li>
      <li
        class="inglist"
      >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni distinctio suscipit eius reprehenderit cum architecto sapiente tenetur quam vitae nesciunt! Dolore placeat alias obcaecati amet, impedit minus dolorem ducimus doloremque.</li>
      <li
        class="inglist"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusantium modi corporis, dolorum eos sequi velit saepe perferendis unde, non, vel dicta facilis reprehenderit voluptate.</li>
    </ol>
  </div>
</template>

<script>
import Recipe from "../views/Recipe.vue";
export default {
  name: "LeftSide",
  mounted() {},
  computed: {
    recipe() {
      return this.$store.state.activeRecipe;
    }
  }
};
</script>

<style>
.banner {
  border-radius: 30px;
}
.banner-image {
  object-fit: cover;
  width: 100%;
  max-height: 300px;
}
.inglist {
  text-align: left;
  padding-bottom: 20px;
}
.spacing {
  padding: 60px;
}
</style>