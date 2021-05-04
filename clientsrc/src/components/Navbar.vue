<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid navbar-text">
      <a class="navbar-brand" href="home">
      SimpleChef 
        </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon burger">x.x</span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="home">Home</a>
          </li>
          <li class="nav-item" :class="{ active: $route.name == 'create' }">
            <router-link
              :to="{ name: 'create' }"
              class=" nav-link  text-light"
              id="navbar-font"
            >Create</router-link>
          </li>
          <li class="nav-item" :class="{ active: $route.name == 'recipes' }">
            <router-link
              :to="{ name: 'recipes' }"
              class=" nav-link  text-light"
              id="navbar-font"
            >Recipes</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>

        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.navbar-text {
  background-color: #212529;
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 17px;
}
a {
  color: white;
}
#navbarSupportedContent {
  justify-content: center;
}
.nav-item {
  padding-left: 10px;
  padding-right: 10px;
}
.navbar-brand {
  background-color: #f4403b;
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
}
.burger{
  color: white;
}
</style>