<template>
  <header class="Basic-Header-Comp">
    <div
      :class="{
        'basic-header-static': true,
        'basic-header-fixed': tFixed,
        'basic-header-grow': !sideBar,
        'basic-header-mobile': isMobile,
      }"
    >
      <header class="basic-header-pseudo"></header>
      <header class="basic-header-real">
        <div class="hamburger ease-out-1/60 hover:gray-100">
          <hamburger
            @toggleClick="handleToggleHamburger"
            o-w="64px"
            o-h="64px"
            i-h="20"
            i-w="20"
          />
        </div>
      </header>
    </div>
  </header>
</template>
<script>
import Hamburger from "../../../../components/hambuger/Hamburger";
import { mapGetters } from "vuex";
export default {
  name: "BasicHeader",
  components: { Hamburger },
  computed: {
    ...mapGetters(["sideBar", "isMobile", "tFixed"]),
  },
  data() {
    return {};
  },
  methods: {
    handleToggleHamburger(val) {
      this.$store.commit("SET_SIDE_BAR", val);
    },
  },
};
</script>
<style lang="less" scoped>
.Basic-Header-Comp {
  .basic-header-real {
    display: flex;
  }
}
</style>
