<template>
  <section
    class="Basic-Layout-Comp"
    :class="{ 'Basic-Layout-Night-Comp': night }"
  >
    <basic-aside v-if="menuDirection === 'left'" />
    <section class="basic-layout-section">
      <basic-header />
      <basic-main />
      <basic-footer />
    </section>
    <config-drawer />
  </section>
</template>
<script>
import BasicAside from "./components/basic-aside/BasicAside";
import BasicHeader from "./components/basic-header/BasicHeader";
import BasicFooter from "./components/basic-footer/BasicFooter";
import ConfigDrawer from "@/components/drawer/ConfigDrawer";
import { mapGetters } from "vuex";
import BasicMain from "@/layouts/basic-layout/components/basic-main/BasicMain";
export default {
  name: "BasicLayout",
  components: { BasicMain, ConfigDrawer, BasicFooter, BasicHeader, BasicAside },
  computed: {
    ...mapGetters(["sideBar", "routes", "isMobile", "menuDirection", "night"]),
  },
  data() {
    return {};
  },
  methods: {
    handleToggleHamburger(val) {
      this.$store.commit("SET_SIDE_BAR", val);
    },
    handleClickMask() {
      this.$store.commit("SET_SIDE_BAR", false);
    },
  },
};
</script>
<style lang="less"></style>
