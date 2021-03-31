<template>
  <div :class="[isMobile && 'header-mobile']">
    <div class="header"></div>
    <header
      :class="[
        'bg-white shadow-basic ease-in-out-0.5',
        sideBar ? 'header-shrink' : 'header-full',
      ]"
    >
      <div class="hamburger ease-out-1/60 hover:gray-100">
        <hamburger
          @toggleClick="handleToggleHamburger"
          o-w="64px"
          o-h="64px"
          i-h="20"
          i-w="20"
        />
      </div>
      <div class="user-pane ease-out-1/60 hover:gray-100 m-r-1">
        <user-pane />
      </div>
      <div class="notice ease-out-1/60 hover:gray-100">
        <notice-bell />
      </div>
    </header>
  </div>
</template>
<script>
import UserPane from "../../../components/pane/UserPane";
import Hamburger from "../../../components/hambuger/Hamburger";
import NoticeBell from "../../../components/notice/NoticeBell";
import { mapGetters } from "vuex";
export default {
  name: "BasicHeader",
  components: { Hamburger, UserPane, NoticeBell },
  computed: {
    ...mapGetters(["sideBar", "isMobile"]),
  },
  data() {
    return {};
  },
  methods: {
    handleToggleHamburger(val) {
      console.log(val);
      this.$store.commit("SET_SIDE_BAR", val);
    },
  },
};
</script>
<style lang="less" scoped></style>
