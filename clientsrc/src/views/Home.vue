<template>
  <div class="home container-fluid row">
    <div class="col-12">
    <navbar> </navbar>
      <p>
        Welcome to SimpleChef!
      </p>
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
</style>
