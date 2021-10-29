<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{
                name: '新增頁面'
              }"
               class="nav-link">新增頁面
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/stock" class="nav-link">Stock Table</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container" style="height: 300vh">
    <router-view></router-view>
  </div>
  {{ name }}
  <router-link to="/newPage/routerNavigation">/newPage/routerNavigation</router-link>
  <button type="button" class="btn btn-primary">Primary</button>
</template>

<script>
export default {
  data() {
    return {
      name: process.env.VUE_APP_NAME,
    };
  },
};
</script>

<style lang="scss">
// @import "./assets/sass/paper-dashboard";
@import "./assets/all.scss";
// @import "bootstrap";
body {
  padding-top: 80px
}
</style>
