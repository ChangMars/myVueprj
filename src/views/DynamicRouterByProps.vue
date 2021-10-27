<template>
  <div></div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  created() {
    console.log('props', this.id);
    const seed = this.id; // route為路由相關資訊
    axios.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => { //
      console.log(res);
    });
  },
};
</script>
