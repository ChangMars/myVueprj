<template>
  <button class="btn btn-primary" type="button" @click="getRoute">getRoute</button>
  <button class="btn btn-primary" type="button" @click="push">Push</button>
  <button class="btn btn-primary" type="button" @click="replace">Replace</button>
  <button class="btn btn-primary" type="button" @click="go">Go</button>
  <hr />
  <button class="btn btn-primary" type="button" @click="addRoute">新增路由</button>
</template>

<script>
export default {
  methods: {
    // 切換頁面方式(有歷史紀錄的)
    push() {
      // this.$router.push('/newpage/DynamicRouter/a3a6d08cad3ba2a9');
      this.$router.push({
        name: 'About',
      });
    },
    // 切換頁面方式(無歷史紀錄)
    replace() {
      this.$router.replace({
        name: 'About',
      });
    },
    // 操作歷史紀錄
    go() {
      this.$router.go(-1); // 回上一頁
    },
    // 取得常用參數
    getRoute() {
      console.log(this.$route); // 路由參數
      console.log(this.$router); // 路由下面可以使用的方法
    },
    // 臨時新增路由的方式
    addRoute() {
      this.$router.addRoute({
        path: '/newAbout',
        name: 'newAbout',
        component: () => import('./About.vue'),
      });
    },
  },
};
</script>
