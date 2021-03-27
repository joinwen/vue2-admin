<template>
  <div class="notice-bell" :style="{ width: oW, height: oH }">
    <el-badge :value="12">
      <i class="el-icon-bell" :style="{ fontSize: fs }"></i>
    </el-badge>
  </div>
</template>
<script>
export default {
  name: "NoticeBell",
  components: {},
  props: {
    fs: {
      type: String,
      default: "20px",
    },
    oW: {
      type: String,
      default: "64px",
    },
    oH: {
      type: String,
      default: "64px",
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.notice-bell {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
