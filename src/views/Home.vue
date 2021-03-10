<template>
  <div class="home container-fluid row">
              

      <div class="col-7">
        <navbar class="row" />
        <div class=" left-side">

                <leftside> </leftside>
        </div>
      </div>

      <div class="col-3 right-side">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, distinctio?
      </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import leftside from "../components/LeftSide.vue";
import Navbar from "../components/Navbar";
export default {
  name: "Home",
  components: {
    HelloWorld,
    leftside,
    Navbar
  }
};
</script>
<style scoped>
/* #212529 */
.left-side {
  background-color: #2A2E32;
  color: white;
  border-radius: 30px;
  /* margin-left: 60px */
}
.right-side {
  background-color: gray;
  color: white;
  border-radius: 30px;


}
.home{
  justify-content: space-between;
  margin: 0;
  padding: 0;
}
</style>
