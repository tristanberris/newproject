<template>
  <!-- <p>{{recipe.title}}</p> -->
  <div class="home container-fluid row">
    <div class="col-xl-9 col-lg-9 col-md-12">
      <navbar class="row mb-3 mt-1" />
      <div class="left-side mb-5">
        <leftside></leftside>
      </div>
      <div class="col-12">
        <button
          type="button"
          class="btn btn-primary d-sm-inline d-md-inline d-lg-none ing-button"
          data-toggle="modal"
          data-target="#exampleModal"
        >View Ingredients</button>
      </div>
    </div>
    <!-- Works for collapsing right-size v -->

    <div class="col-3 right-side d-none d-lg-block">
      <rightside class></rightside>
    </div>
    <!-- Button trigger modal -->

    <!-- Modal -->

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">{{recipe.steps}}</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import leftside from "../components/LeftSide.vue";
import Navbar from "../components/Navbar";
import rightside from "../components/RightSide.vue";
export default {
  name: "Recipe",
  components: {
    // leftside,
    Navbar,
    rightside
  },
  mounted() {
    this.$store.dispatch("setActiveRecipe", this.$route.params.recipeId);
  },
  computed: {
    recipe() {
      return this.$store.state.activeRecipe;
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
.modal-body {
  color: black;
}
.ing-button {
  /* text-align: -webkit-center; */
}
</style>