<template>
  <div>
    <!-- <router-view name="header"></router-view>
        <main>
            <fade-transition origin="center" mode="out-in" :duration="250">
                <router-view/>
            </fade-transition>
        </main>
    <router-view name="footer"></router-view> -->
    <router-view></router-view>
  </div>
  <!-- </div>
  {{ name }}
  <router-link to="/newPage/routerNavigation">/newPage/routerNavigation</router-link>
  <button type="button" class="btn btn-primary">Primary</button> -->
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
// body {
//   padding-top: 80px
// }
</style>
