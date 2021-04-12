<template>
  <div
    :class="[
      'basic-aside ease-in-out-0.5',
      sFixed && 'aside-fixed',
      isMobile && (sideBar ? 'aside-mobile' : 'aside-mobile-hidden'),
    ]"
  >
    <div
      class="pseudo-aside ease-in-out-0.5"
      :class="[sideBar ? 'aside-full' : 'aside-shrink']"
    ></div>
    <aside
      :class="['ease-in-out-0.5', sideBar ? 'aside-full' : 'aside-shrink']"
    >
      <brand-logo />
      <el-scrollbar border-none x-hidden style="height: calc(100% - 64px)">
        <el-menu
          class="el-menu-vertical-demo"
          :collapse="collapsed"
          :default-active="$route.path"
          :unique-opened="true"
        >
          <Menu
            v-for="(item, index) in routes[0].children"
            :key="index"
            :data="item"
          />
        </el-menu>
      </el-scrollbar>
    </aside>
  </div>
</template>
<script>
import BrandLogo from "../../../components/logo/BrandLogo";
import Menu from "@/components/menu/Menu";
import { mapGetters } from "vuex";
export default {
  name: "BasicAside",
  components: { BrandLogo, Menu },
  computed: {
    ...mapGetters(["sideBar", "routes", "isMobile", "sFixed"]),
    collapsed() {
      if (this.isMobile) {
        return false;
      } else {
        return !this.sideBar;
      }
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped></style>
