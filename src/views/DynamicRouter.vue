<template>
  <div></div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    console.log(this.$route.params);
    const seed = this.$route.params.id; // route為路由相關資訊
    axios.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => { //
      console.log(res);
    });
  },
};
</script>
