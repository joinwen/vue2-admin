<template>
  <el-popover placement="bottom" width="280" trigger="click">
    <el-tabs value="first">
      <el-tab-pane label="用户管理" name="first"> 用户管理 </el-tab-pane>
      <el-tab-pane label="配置管理" name="second"> 配置管理 </el-tab-pane>
      <el-tab-pane label="角色管理" name="third"> 角色管理 </el-tab-pane>
    </el-tabs>
    <div
      slot="reference"
      class="notice-bell"
      :style="{ width: oW, height: oH }"
    >
      <el-badge :value="12">
        <i class="el-icon-bell" :style="{ fontSize: fs }"></i>
      </el-badge>
    </div>
  </el-popover>
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
