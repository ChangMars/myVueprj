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

    const page = this.$route.params.id; // route為路由相關資訊
    axios.post(`http://35.230.20.10/api/v0/report/latest/?page=${page}`).then((res) => { // http://35.230.20.10/api/v0/report/latest/?page=1
      console.log(res);
    });
  },
};
</script>
