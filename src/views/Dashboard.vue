<template>
  <div class="container-fluid">
    <ToastMessages></ToastMessages>
    <router-view/>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessage.vue';

export default {
  components: {
    ToastMessages,
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {
    // 切割cookies字串方式取得token
    // const token = document.cookie
    //   .split('; ')
    //   .find((row) => row.startsWith('hexToken='))
    //   .split('=')[1];

    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    console.log(token);
    // this.$http.defaults.headers.common.Authorization = token;
    // const api = `${process.env.VUE_APP_API}api/user/check`;
    // console.log(api, this.user);
    // this.$http.post(api, this.user)
    //   .then((res) => {
    //     console.log(res);
    //     if (!res.data.success) {
    //       this.$router.push({ name: 'Login' });
    //     }
    //   });
  },
};
</script>
