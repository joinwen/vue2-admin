<template>
  <div class="base-line-chart">
    <div ref="chart" :style="{ height }"></div>
  </div>
</template>
<script>
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/legend";
import "echarts/lib/component/dataZoom";
import "echarts/lib/component/axisPointer";
import { addListener } from "resize-detector";
export default {
  name: "BaseChart",
  props: {
    options: {
      type: Object,
      default() {
        return null;
      },
    },
    height: {
      type: String,
      default: "300px",
    },
    notMerge: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    options: {
      handler(newVal, oldVal) {
        if (newVal != oldVal) {
          this.theOptions = newVal;
          this.init();
        }
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      chart: undefined,
      theOptions: {},
    };
  },
  mounted() {
    if (this.options) {
      this.init();
    }
  },
  methods: {
    init() {
      if (this.options) {
        if (!this.chart) {
          console.log(echarts);
          this.chart = echarts.init(this.$refs.chart);
        }
        setTimeout(() => {
          this.chart.setOption(this.theOptions, this.notMerge);
        });
        addListener(this.$el, () => {
          debugger;
          this.resize();
        });
      }
    },
    resize() {
      if (this.chart) {
        this.chart.resize();
      }
    },
    destroy() {
      if (this.chart) {
        this.chart.dispose();
      }
    },
    clear() {
      if (this.chart) {
        this.chart.clear();
      }
    },
  },
};
</script>
<style lang="less" scoped>
.base-line-chart {
  div {
    width: 100%;
    min-width: 150px;
  }
}
</style>
