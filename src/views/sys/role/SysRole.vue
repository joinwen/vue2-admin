<template>
  <div class="sys-role">
    <bread-crumb />
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
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
export default {
  name: "SysRole",
  components: { BreadCrumb },
  data() {
    return {
      visible: true,
    };
  },
};
</script>
<style lang="less" scoped></style>
