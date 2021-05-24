<template>
  <div class="brand-logo">
    <a href="">
      <img :src="require('@/assets/images/layout/basic/logo.png')" alt="" />
      <h1 class="fs-lg" v-if="sideBar">Vue 2 Admin</h1>
    </a>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "BrandLogo",
  components: {},
  computed: {
    ...mapGetters(["sideBar"]),
  },
};
</script>
<style lang="less" scoped>
@import "../../bootstrap/style/theme/variables/_theme-variables.less";
.brand-logo {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: @menuColorActive;
  }

  img {
    height: @headerHeight / 2;
    margin-right: 0.5rem;
  }
}
</style>
