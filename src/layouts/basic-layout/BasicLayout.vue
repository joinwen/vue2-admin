<template>
  <div class="basic-layout">
    <section>
      <div
        :class="[isMobile && sideBar && 'mask-mobile']"
        @click="handleClickMask"
      ></div>
      <basic-aside />
      <section class="bg-info-100">
        <basic-header />
        <main class="m-1 p-1 rounded-4 bg-white">
          <router-view />
        </main>
        <footer>
          <basic-footer />
        </footer>
      </section>
    </section>
    <config-drawer />
  </div>
</template>
<script>
import BasicAside from "./components/basic-aside/BasicAside";
import BasicHeader from "./components/BasicHeader";
import BasicFooter from "./components/BasicFooter";
import ConfigDrawer from "@/components/drawer/ConfigDrawer";
import { mapGetters } from "vuex";
export default {
  name: "BasicLayout",
  components: { ConfigDrawer, BasicFooter, BasicHeader, BasicAside },
  computed: {
    ...mapGetters(["sideBar", "routes", "isMobile"]),
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
