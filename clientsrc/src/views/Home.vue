<template>
  <div class="home container-fluid row">
    <div class="col-12">
      <navbar></navbar>
    </div>
    <div class="cover-image-container col-12">
      <!-- <img class="cover-image" src="../assets/pasta.jpg" alt /> -->
      <div class="centered col-12">No Bloat</div>
      <div class="centered-lower col-12">Only Recipes</div>
      <div class="col-12 spacing"></div>
      <div class="col-12 col-sm-4 no-block">
        <a class="gs-button btn" role="button" href="/#/recipes">get started</a>
      </div>
      <div class="col-12 col-sm-1 no-block">
        <span class="middle-or">OR</span>
      </div>
      <div class="col-12 col-sm-4 no-block">
        <a class="cyo-button btn" role="button" href="/#/create">create your own</a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import leftside from "../components/LeftSide.vue";
import Navbar from "../components/Navbar";
import rightside from "../components/RightSide.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    leftside,
    Navbar,
    rightside
  }
};
</script>
<style scoped>
/* #212529 */
a{
  width: 100%;
}
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
.cover-image {
  /* object-fit: cover;
  width: 100%;
  min-height: 800px;
  opacity: 0.4; */
}
.cover-image-container {
  position: relative;
  text-align: center;
  color: white;

  height: 100vh;
}
.cover-image-container::before {
  content: "";
  background-image: url(https://i.imgur.com/ZStG4IE.jpg);
  background-size: cover;
  position: absolute;
  text-align: center;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.4;
}
.centered {
  /* position: absolute;
  top: 20%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  font-size: 3.5em;
  /* color: #f4403b; */
}
.centered-lower {
  /* position: absolute;
  top: 40%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  font-size: 3.5em;
  /* color: #f4403b; */
}
.gs-button {
  /* position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%); */
  background-color: #f4403b;
  color: white;
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 2em;
}
.cyo-button {
  /* position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%); */
  background-color: #f4403b;
  color: white;
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 2em;
}
.middle-or {
  /* position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%); */
  color: white;
  font-weight: lighter;
  font-size: 1.5em;
}
.no-block{
  display: inline-block;
}
.spacing{
  height: 35vh;
}
</style>
