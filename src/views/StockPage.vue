<template>
  <Loading :active="isLoading"></Loading>
  <div>最新研究報告列表</div>
   <div class="text-end">
    <button class="btn btn-primary" type="button">
      查詢研究報告
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>股票代號</th>
        <th>股票名稱</th>
        <th>報告卷商</th>
        <th>日期</th>
        <th>價格</th>
        <th>PE值</th>
        <th>下載網址</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item) in stocks" :key="item.id">
        <td>{{ item.stock.stockId}}</td>
        <td>{{ item.stock.name}}</td>
        <td>{{ item.broker }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.ratio }}</td>
        <td>
          <button type="button" class="btn btn-outline-danger"
          @click="openModal(item)">
            報告
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination
  :pages="pagination"
  @emit-pages="getStocks"></Pagination>
  <PdfModal ref="pdfModal"
  :stock="tempStock"></PdfModal>
</template>
<script>
import axios from 'axios';
// import PaperTable from '@/components/PaperTable.vue';
import Pagination from '../components/Pagination.vue';
import PdfModal from '../components/PdfModal.vue';

// const tableColumns = ['id', 'name', 'broker', 'date', 'rating', 'price', 'ratio', 'pdf_url'];
// const tableData = [
//   // {
//   //   broker: 1,
//   //   date: 'Dakota Rice',
//   //   rating: '$36.738',
//   //   price: 'Niger',
//   //   ratio: 'Oud-Turnhout',
//   // },
// ];

export default {
  components: {
    // PaperTable,
    Pagination,
    PdfModal,
  },
  data() {
    // console.log('data'); // 1
    return {
      stocks: [],
      pagination: {
        current_page: 1,
        has_pre: false,
        has_next: true,
      },
      isLoading: false,
      tempStock: {},
      // table1: {
      //   title: 'Stripped Table',
      //   subTitle: 'Here is a subtitle for this table',
      //   columns: [...tableColumns],
      //   data: [...tableData],
      // },
    };
  },
  created() {
    this.getStocks();
  },

  // created() {
  //   console.log('created'); // 2
  //   const pagenum = parseInt(this.$route.params.id, 10); // route為路由相關資訊透過parseInt轉成int
  //   console.log(pagenum);
  //   const require = { page: 1 };
  //   console.log(require);
  //   const params = JSON.stringify(require);
  //   // axios 加入 headers 方式一
  //   // axios({
  //   //   method: 'post',
  //   //   baseURL: 'https://taiwan-stock-winner.tk',
  //   //   url: '/api/v0/report/latest/',
  //   //   headers: {
  //   //     // crossDomain: true,
  //   //     // changOrigin: true,
  //   //     // withCredentials: true,
  //   //     // Accept: 'application/json',
  //   //     'Content-Type': 'application/json',
  //   //     // 'Access-Control-Allow-Origin': '*',
  //   //     // 'Access-Control-Allow-Methods': '*',
  //   //   },
  //   //   data: params,
  //   // }).then((res) => {
  //   //   console.log(res);
  //   //   res.data.result.forEach((element) => {
  //   //     const e = {
  //   //       id: element.stock.stockId,
  //   //       name: element.stock.name,
  //   //       broker: element.broker,
  //   //       date: element.date,
  //   //       rating: element.rating,
  //   //       price: element.price,
  //   //       ratio: element.ratio,
  //   //       pdf_url: element.pdf_url,
  //   //     };
  //   //     this.table1.data.push(e);
  //   //   });
  //   // });
  //   // axios 加入 headers 方式二
  //   axios.post('https://taiwan-stock-winner.tk/api/v0/report/latest/', params, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   }).then((res) => {
  //     console.log(res);
  //     res.data.result.forEach((element) => {
  //       const e = {
  //         id: element.stock.stockId,
  //         name: element.stock.name,
  //         broker: element.broker,
  //         date: element.date,
  //         rating: element.rating,
  //         price: element.price,
  //         ratio: element.ratio,
  //         pdf_url: element.pdf_url,
  //       };
  //       this.table1.data.push(e);
  //       this.stocks.push(e);
  //     });
  //   });
  // },

  methods: {
    openModal(item) {
      console.log(item);
      this.tempStock = { ...item };
      const pdfComponent = this.$refs.pdfModal;
      pdfComponent.showModal();
    },
    getStocks(pagenum = 1) {
      console.log(`getStocksNum:${pagenum}`);
      this.isLoading = true;
      const require = { page: pagenum };
      const params = JSON.stringify(require);
      axios.post('https://taiwan-stock-winner.tk/api/v0/report/latest/', params, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        this.isLoading = false;
        console.log(res.data);
        if (res.data.s) {
          this.stocks = res.data.result;
          this.pagination.has_next = res.data.has_next_page;
          this.pagination.current_page = pagenum;
          this.pagination.has_pre = (pagenum !== 1);
        }
      });
    },
  },
};
</script>
