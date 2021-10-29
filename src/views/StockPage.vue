<template>
  <div>Test</div>
  <div class="row">
    <div class="col-12">
      <!-- <card :title="table1.title" :subTitle="table1.subTitle"> -->
        <div class="table-responsive">
          <!-- <div v-for="(Item, index) in table1.data" :key="index">
            {{ Item }}
          </div> -->
          <paper-table type="hover" :title="table1.title" :sub-title="table1.subTitle"
          :data="table1.data" :columns="table1.columns"> </paper-table>
        </div>
      <!-- </card> -->
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import PaperTable from '@/components/PaperTable.vue';

const tableColumns = ['id', 'name', 'broker', 'date', 'rating', 'price', 'ratio', 'pdf_url'];
const tableData = [
  // {
  //   broker: 1,
  //   date: 'Dakota Rice',
  //   rating: '$36.738',
  //   price: 'Niger',
  //   ratio: 'Oud-Turnhout',
  // },
];

export default {
  components: {
    PaperTable,
  },
  data() {
    // console.log('data'); // 1
    return {
      table1: {
        title: 'Stripped Table',
        subTitle: 'Here is a subtitle for this table',
        columns: [...tableColumns],
        data: [...tableData],
      },
    };
  },
  created() {
    // console.log('created'); // 2
    // const page1 = this.$route.params.id; // route為路由相關資訊
    // const require = { page: 2 };
    // const params = JSON.stringify(require);
    axios({
      method: 'post',
      baseURL: 'http://35.230.20.10',
      url: '/api/v0/report/latest/',
      // headers: {
      //   crossDomain: true,
      //   changOrigin: true,
      //   withCredentials: true,
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json',
      //   'Access-Control-Allow-Origin': '*',
      //   'Access-Control-Allow-Methods': '*',
      // },
      // data: { page: 4 },
    }).then((res) => {
      console.log(res);
      res.data.result.forEach((element) => {
        const e = {
          id: element.stock.stockId,
          name: element.stock.name,
          broker: element.broker,
          date: element.date,
          rating: element.rating,
          price: element.price,
          ratio: element.ratio,
          pdf_url: element.pdf_url,
        };
        this.table1.data.push(e);
      });
    });
    // axios.post('http://35.230.20.10/api/v0/report/latest/').then((res) => {
    //   console.log(res);
    //   res.data.result.forEach((element) => {
    //     this.table1.data.push(element);
    //   });
    // });
  },
};
</script>
<style>
</style>
