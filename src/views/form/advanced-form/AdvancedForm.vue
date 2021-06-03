<template>
  <div class="Advanced-Form">
    <bread-crumb />
  </div>
</template>
<script>
import BreadCrumb from "@/components/breadcrumb/BreadCrumb";
export default {
  name: "AdvancedForm",
  components: { BreadCrumb },
  data() {
    return {
      visible: false,
    };
  },
};
</script>
<style lang="less" scoped></style>
