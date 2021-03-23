<template>
<div class="row justify-content-center">
<div class="col-10">

  <form class="">
  <div class="form-group">
    <label for="exampleInputEmail1">Name of Recipe:</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter recipe name">
  </div>
  <form>
  <div class="form-group">
    <label for="exampleFormControlFile1">Image of Recipe</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>
</form>
  <div class="form-group"  >
    <h1>Steps</h1>
    <label for="exampleInputPassword1"></label>
    <div id="addStep" >
    <input class="form-control form-control-sm"  type="text" placeholder="Step 1">
    </div>
    <button type="button"  class="btn btn-primary"  @click="addStep()">Add Step</button>
    <!-- <input class="form-control form-control-sm" type="text" placeholder="Step 2">
    <input class="form-control form-control-sm" type="text" placeholder="Step 3"> -->
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</div>
</template>

<script>
export default {
name: "Create",

methods: {
    
 addStep(){
      var x=1;
      var d = document.getElementById('addStep')
      d.innerHTML += '<input class=form-control form-control-sm" type="text" placeholder="Step 1">';
  

 }
}
}
</script>

<style>

</style>