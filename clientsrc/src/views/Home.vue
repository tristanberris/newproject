<template>
  <div class="home container-fluid row">
    <div class="col-9">
      <navbar class="row mb-3 mt-1" />
      <div class="left-side mb-5">
        <leftside></leftside>
      </div>
    </div>
    <div class="col-3 right-side">
      <rightside></rightside>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
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
