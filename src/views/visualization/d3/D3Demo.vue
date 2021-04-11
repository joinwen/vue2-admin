<template>
  <div class="D3-Demo">
    <el-row>
      <el-col :xl="12" :md="24">
        <figure class="shadow-light p-1">
          <base-chart :options="bar" />
        </figure>
      </el-col>
      <el-col :xl="12" :md="24">
        <figure class="shadow-light p-1">
          <base-chart :options="line" />
        </figure>
      </el-col>
      <el-col :xl="12" :md="24">
        <figure class="shadow-light p-1">
          <base-chart :options="pie" />
        </figure>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import BaseChart from "../../../components/chart/BaseChart";
import pieFn from "./assets/pie";
import barFn from "./assets/bar";
import lineFn from "./assets/line";
export default {
  name: "D3Demo",
  components: { BaseChart },
  data() {
    return {
      pie: pieFn(),
      bar: barFn(),
      line: lineFn(),
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped></style>
