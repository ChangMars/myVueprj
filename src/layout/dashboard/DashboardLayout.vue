<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
                <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'About' }" class="nav-link">About</router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{
                    name: '新增頁面'
                  }"
                  class="nav-link">新增頁面
                </router-link>
              </li>
              <!-- <li class="nav-item">
                <router-link to="/stock" class="nav-link">Stock Table</router-link>
              </li> -->
              <li class="nav-item">
                <router-link :to="{ name: 'Products' }" class="nav-link">產品列表</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" @click.prevent="logout">登出</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <dashboard-content></dashboard-content>
      <content-footer></content-footer>
    </div>
</template>

<script>
import ContentFooter from './ContentFooter.vue';
import DashboardContent from './Content.vue';

export default {
  components: {
    ContentFooter,
    DashboardContent,
  },
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      console.log(api);
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            console.log(res);
            this.$router.push({ name: 'Login' });
          }
        });
    },
  },
};
</script>
