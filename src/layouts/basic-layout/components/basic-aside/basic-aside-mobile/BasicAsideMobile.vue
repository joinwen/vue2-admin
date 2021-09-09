<template>
  <div class="Basic-Aside-Mobile">
    <el-drawer
      size="256px"
      :visible.sync="sideBar"
      direction="ltr"
      :before-close="handleBeforeClose"
      :with-header="false"
    >
      <brand-logo />
      <el-scrollbar border-none x-hidden style="height: calc(100% - 64px)">
        <el-menu
          class="el-menu-vertical-demo"
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
    </el-drawer>
  </div>
</template>
<script>
import Menu from "@/components/menu/Menu";
import BrandLogo from "@/components/logo/BrandLogo";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "BasicAsideMobile",
  components: { Menu, BrandLogo },
  computed: {
    ...mapGetters(["routes", "sideBar"]),
  },
  methods: {
    ...mapMutations(["SET_SIDE_BAR"]),
    handleBeforeClose() {
      this.SET_SIDE_BAR(false);
    },
  },
};
</script>
