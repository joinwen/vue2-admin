<template>
  <header class="Basic-Header-Normal-Comp">
    <div
      :class="{
        'basic-header-static': true,
        'basic-header-fixed': tFixed,
        'basic-header-grow': !sideBar,
        'basic-header-mobile': isMobile,
      }"
    >
      <header class="basic-header-pseudo"></header>
      <header
        :style="{ display: isMobile ? 'none' : 'flex' }"
        class="basic-header-real shadow-basic ease-0.5"
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
        <div class="header-center" />
        <notice-bell class="ease-out-1/60 hover:gray-100" slot="reference" />
        <user-pane class="ease-out-1/60 hover:gray-100" />
      </header>
      <header
        :style="{ display: !isMobile ? 'none' : 'flex' }"
        class="basic-header-real shadow-basic"
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
        <div class="header-center" />
        <notice-bell class="ease-out-1/60 hover:gray-100" slot="reference" />
        <user-pane class="ease-out-1/60 hover:gray-100" />
      </header>
    </div>
  </header>
</template>
<script>
import Hamburger from "@/components/hambuger/Hamburger";
import NoticeBell from "@/components/notice/NoticeBell";
import UserPane from "@/components/pane/UserPane";
import { mapGetters } from "vuex";
export default {
  name: "BasicHeaderNormal",
  components: { UserPane, NoticeBell, Hamburger },
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
.Basic-Header-Normal-Comp {
  .basic-header-real {
    display: flex;
    align-items: center;
    .hamburger {
      flex: 0 0 auto;
    }
    .header-center {
      flex: 1 1 auto;
    }
  }
}
</style>
