<template>
  <div class="RightSide">
    <div class="row">
      <div class="col-12 pfp">
        <img id="pfp" class="pt-2 pb-2" src="https://picsum.photos/70/70" alt />
        <div class="col-12 pfp p-0">username</div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 white-line"></div>
    </div>
    <div class="row">
      <div class="col-12">
        <h1 class="header">Ingredients</h1>
      </div>
      <div class="col-12">
        <ol type="1">
          <li class="ingredients-list">Lorem ipsum dolor sit amet.</li>
          <li class="ingredients-list">Lorem ipsum dolor sit amet.</li>
          <li class="ingredients-list">Lorem ipsum dolor sit amet.</li>
        </ol>
      </div>
    </div>
    <div class="row calorie-info-parent">
      <div class="col-10 calorie-info">
        <h3 style="text-decoration:underline">Calorie Information</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur velit facere reprehenderit provident assumenda, amet repellat eius aspernatur quam quidem maiores id autem in eum alias necessitatibus, dolores ut quod!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightSide"
};
</script>

<style>
.ingredients-list {
  text-align: left;
  padding-top: 8px;
  font-size: 18px;
}
#pfp {
  border-radius: 50px;
}
.pfp {
  text-align: right;
}
.white-line {
  border-top: 6px solid white;
  margin-top: 12px;
  margin-bottom: 12px;
}
.header {
  text-align: center;
  text-decoration: underline;
}
.calorie-info {
  background-color: gray;
  padding: 10px;
  border-radius: 10px;
}
.calorie-info-parent {
  justify-content: center;
  margin-top: 100px
}
</style>