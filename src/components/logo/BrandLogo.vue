<template>
  <div class="brand-logo">
    <a href="">
      <img :src="require('@/assets/images/layout/basic/logo.png')" alt="" />
      <h1 v-if="sideBar">Vue 2 Admin</h1>
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
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.brand-logo {
  height: 64px;
  background-color: #002140;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    height: 32px;
    margin-right: 0.5rem;
  }
  h1 {
    font-size: 20px;
    margin: 0px 0px 0px 0.5rem;
    color: #fff;
  }
}
</style>
