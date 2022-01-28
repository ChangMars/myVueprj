<template>
  <div class="modal fade"
  id="staticBackdrop"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
  ref="modal">
    <div class="modal-dialog modal-xl modal-dialog-scrollable" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <!-- <form class="input-group mb-3"> -->
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
            v-model="searchId" >
            <button class="btn btn-outline-success" type="submit"
            @click="getStockTarget()">Search</button>
          <!-- </form> -->
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row" style="height: 30vh;">
              <div class="col-4" id="barchart">
                barchart
              </div>
              <div class="col-8" id="linechart">
                linechart
              </div>
              <!-- <div class="col">
                <div id="main" style="width:100vh;height:100vh;"></div>
              </div>
              <div class="col-3">
                <div id="main2" style="width:100vh;height:100vh;"></div>
              </div> -->
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal">關閉
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
import * as Echarts from 'echarts';
import dayjs from 'dayjs';

export default {
  component: {
  },
  props: { // 外層事件
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      modal: {},
      rate: {},
      target: {},
      searchId: 2330,
    };
  },
  methods: {
    showModal() {
      console.log('showModal');
      this.modal.show();
    },
    hideModal() {
      console.log('hideModal');
      this.modal.hide();
    },
    getStockTarget() {
      this.isLoading = true;
      const api = `https://taiwan-stock-winner.tk/api/v0/report/${this.searchId}/target/`;
      this.$http.get(api).then((res) => {
        console.log('1');
        this.isLoading = false;
        console.log(res.data.result);
        this.target = res.data.result;
        this.getStockRate();
      });
    },
    getStockRate() {
      // this.isLoading = true;
      console.log('3');
      const api = `https://taiwan-stock-winner.tk/api/v0/report/${this.searchId}/rate/`;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        console.log('4');
        console.log(res.data.result);
        this.rate = res.data.result;
        this.drawTarget();
      });
    },
    drawTarget() {
      console.log('5');
      const myChart = Echarts.init(document.getElementById('linechart')); // 獲取Dom
      const aDate = [];
      const aValue = [];
      let axisMax = 0;
      let axisMin = 9999;
      this.target.price.forEach((e) => {
        aDate.push(dayjs(e.date).format('YYYY-MM-DD'));
        aValue.push([e.open, e.close, e.low, e.high]);
      });
      aValue.forEach((e) => {
        if (Math.max(...e) > axisMax) {
          axisMax = Math.max(...e);
        }
        if (Math.min(...e) < axisMin) {
          axisMin = Math.min(...e);
          console.log(Math.min(...e));
        }
      });
      console.log(axisMax > this.target.highest ? axisMax : this.target.highest);
      console.log(axisMin < this.target.lowest ? axisMin : this.target.lowest);
      const option = {
        title: {
          text: '目標價圖表',
          left: 0,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          },
        },
        xAxis: {
          type: 'category',
          data: aDate,
        },
        yAxis: {
          max: axisMax > this.target.highest ? axisMax : this.target.highest,
          min: axisMin < this.target.lowest ? axisMin : this.target.lowest,
          scale: true,
          splitArea: {
            show: true,
          },
        },
        series: [
          {
            name: '目標線',
            type: 'candlestick',
            data: aValue,
            markLine: {
              data: [
                {
                  name: 'highest',
                  yAxis: this.target.highest,
                },
                {
                  name: 'average',
                  yAxis: this.target.average,
                },
                {
                  name: 'lowest',
                  yAxis: this.target.lowest,
                },
              ],
            },
          },
        ],
      };
      myChart.setOption(option);

      const myChart2 = Echarts.init(document.getElementById('barchart'));
      const option2 = {
        xAxis: {
          type: 'category',
          data: ['buy', 'hold', 'range', 'sell', 'noidea'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [
              this.rate.buy,
              this.rate.hold,
              this.rate.range,
              this.rate.sell,
              this.rate.no_comment,
            ],
            type: 'bar',
          },
        ],
      };
      myChart2.setOption(option2);
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
