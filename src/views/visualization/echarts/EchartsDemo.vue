<template>
  <div class="Echart-Demo">
    <div class="flex">
      <el-row>
        <el-col :xl="12" :md="24" :xs="24">
          <figure class="shadow-light p-1">
            <base-e-chart :options="bar" theme="macarons" autoresize />
          </figure>
        </el-col>
        <el-col :xl="12" :md="24" :xs="24">
          <figure class="shadow-light p-1">
            <base-e-chart :options="pie" autoresize />
          </figure>
        </el-col>
        <el-col :xl="12" :md="24" :xs="24">
          <figure class="shadow-light p-1">
            <base-e-chart :options="line" theme="macarons" autoresize />
          </figure>
        </el-col>
        <el-col :xl="12" :md="24" :xs="24">
          <figure class="shadow-light p-1" style="background-color: #333">
            <base-e-chart :options="polar" theme="dark" autoresize />
          </figure>
        </el-col>
        <el-col :xl="12" :md="24" :xs="24">
          <figure class="shadow-light p-1">
            <base-e-chart :options="scatter" autoresize />
          </figure>
        </el-col>
        <el-col :xl="12" :md="24" :xs="24">
          <figure class="shadow-light p-1" style="background-color: #404a59">
            <base-e-chart :options="bar" autoresize />
          </figure>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import BaseEChart from "../../../components/chart/BaseEChart";
import barFn from "./assets/bar";
import pieFn from "./assets/pie";
import lineFn from "./assets/line";
import polarFn from "./assets/polar";
import scatterFn from "./assets/scatter";
import mapFn from "./assets/map";
import theme from "./assets/theme.json";
import china from "./assets/china.json";
BaseEChart.registerTheme("macarons", theme);
BaseEChart.registerMap("china", china);
export default {
  name: "EchartsDemo",
  components: { BaseEChart },
  data() {
    return {
      bar: barFn(),
      pie: pieFn(),
      line: lineFn(),
      polar: polarFn(),
      scatter: scatterFn(),
      map: mapFn(),
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped></style>
