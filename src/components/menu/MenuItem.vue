<template>
  <el-menu-item @click="handleMenuClick" :disabled="disabled" :index="index">
    <!--    <template slot="title">-->
    <i v-if="icon" :class="[icon]"></i>
    <span slot="title">{{ title }}</span>
    <!--    </template>-->
  </el-menu-item>
</template>
<script>
export default {
  name: "MenuItem",
  props: {
    index: {
      type: String,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleMenuClick() {
      let path = this.index;
      this.$router.push({ path: path });
      if (this.$store.getters.isMobile) {
        this.$store.commit("SET_SIDE_BAR", false);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
