<template>
  <Card>
    <template>
      <h4 v-if="$slots.title || title" class="card-title">
        <slot name="title">
          {{ title }}
        </slot>
      </h4>
      <p class="card-category">
        <slot name="subTitle">
          {{ subTitle }}
        </slot>
      </p>
    </template>
    <div>
      <div :id="chartId" class="ct-chart"></div>
      <div class="footer">
        <div class="chart-legend">
          <slot name="legend"></slot>
        </div>
        <hr />
        <div class="stats">
          <slot name="footer"></slot>
        </div>
        <div class="pull-right"></div>
      </div>
    </div>
  </Card>
</template>
<script>
import Card from '@/components/Card.vue';

export default {
  name: 'chart-card',
  components: {
    Card,
  },
  props: {
    footerText: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    chartType: {
      type: String,
      default: 'Line', // Line | Pie | Bar
    },
    chartOptions: {
      type: Object,
      default: () => {},
    },
    chartData: {
      type: Object,
      default: () => ({
        labels: [],
        series: [],
      }),
    },
  },
  data() {
    return {
      chartId: 'no-id',
    };
  },
  methods: {
    initChart(Chartist) {
      console.log('initChart');
      const chartIdQuery = `#${this.chartId}`;
      Chartist[this.chartType](chartIdQuery, this.chartData, this.chartOptions);
    },
    updateChartId() {
      console.log('updateChartId');
      const currentTime = new Date().getTime().toString();
      const randomInt = this.getRandomInt(0, currentTime);
      this.chartId = `div_${randomInt}`;
    },
    getRandomInt(min, max) {
      console.log('getRandomInt');
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
  mounted() {
    console.log('mounted');
    this.updateChartId();
    import('chartist').then((Chartist) => {
      const ChartistLib = Chartist.default || Chartist;
      this.$nextTick(() => {
        this.initChart(ChartistLib);
      });
    });
  },
};
</script>
