<template>
  <div class="row justify-content-center">
    <div class="col-10">
      <form class @submit.prevent="addRecipe()">
        <div class="form-group">
          <label for="exampleInputEmail1">Name of Recipe:</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter recipe name"
            required
            v-model="recipe.title"
          />
        </div>
        <form>
          <div class="form-group">
            <label for="exampleFormControlFile1">Image of Recipe</label>
            <input type="file" class="form-control-file" id="exampleFormControlFile1" />
          </div>
        </form>
        <div class="form-group">
          <h1>Steps</h1>
          <label for="exampleInputPassword1"></label>
          <div id="addStep">
            <div>
              <div id="stepNumber" value="1"></div>
            </div>
            <input
              class="form-control form-control-sm mb-1"
              type="text"
              placeholder="Add Current Step"
              v-model="recipe.steps"
            />
          </div>
          <button type="button" class="btn btn-primary" @click="addStep()">Add Step</button>
          <!-- <input class="form-control form-control-sm" type="text" placeholder="Step 2">
          <input class="form-control form-control-sm" type="text" placeholder="Step 3">-->
        </div>
        <div class="form-group">
          <h1>Ingredients</h1>
          <label for="exampleInputPassword1"></label>
          <div id="addIngredient">
            <div>
              <div id="ingredientNum" value="1"></div>
            </div>
            <input
              class="form-control form-control-sm mb-1"
              type="text"
              placeholder="Add Current Ingredient"
              v-model="recipe.ingredients"
            />
          </div>
          <button type="button" class="btn btn-primary" @click="addIngredient()">Add Ingredient</button>
          <!-- <input class="form-control form-control-sm" type="text" placeholder="Step 2">
          <input class="form-control form-control-sm" type="text" placeholder="Step 3">-->

          <h1>Calorie Info</h1>
          <small>(optional)</small>

          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="recipe.calorieInfo"></textarea>
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            
          />
          <label class="form-check-label" for="exampleCheck1">Private Recipe?</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Create",
  props:["recipeData"],

  mounted() {
    // var value = 1;
    // console.log(value)
  },
  data() {
    return {
      recipe: {}
    };
  },

  methods: {
    addStep() {
      // var x=1;
      // var stepNum = document.getElementById('stepNumber')
      // stepNum.innerHTML = x++;
      //  console.log(x)
      var d = document.getElementById("addStep");
      d.innerHTML +=
        '<div><div id="stepNumber" value="1"></div></div><input class="form-control form-control-sm mb-1"  type="text" placeholder="Add Current Step">';
      //  x++;
      // var value = parseInt(document.getElementById('stepNumber').value, 10);
      // value = isNaN(value) ? 1 : value;
      // console.log(value)
      // value++;
      // document.getElementById('stepNumber').value = value;
      // console.log(value)
    },
    addIngredient() {
      var d = document.getElementById("addIngredient");
      d.innerHTML +=
        '<div><div id="ingredientNum" value="1"></div></div><input class="form-control form-control-sm mb-1"  type="text" placeholder="Add Current Ingredient">';
    },
    addRecipe() {
      // this.recipe.name = "test"
      console.log(this.recipe);
      this.$store.dispatch("addRecipe", this.recipe)
    }
  },
  component:{}
};
</script>

<style>
* {
  color: white;
  /* background-color: #212529; */
}
</style>