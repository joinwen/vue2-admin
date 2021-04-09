<template>
  <div class="sys-role">
    <h2>角色管理</h2>
    <el-dialog
      :visible="visible"
      width="50%"
      title="弹出"
      @close="visible = !visible"
    >
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "SysRole",
  data() {
    return {
      visible: true,
    };
  },
};
</script>
<style lang="less" scoped></style>
