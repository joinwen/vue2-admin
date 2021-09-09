<template>
  <div class="Basic-Aside-Pc-Comp">
    <div
      :class="{
        'basic-aside-pc-static': true,
        'basic-aside-pc-fixed': sFixed,
        'basic-aside-pc-shrink': !sideBar,
      }"
    >
      <aside class="basic-aside-pc-pseudo ease-0.5"></aside>
      <aside class="basic-aside-pc-real ease-0.5">
        <brand-logo />
        <el-scrollbar border-none x-hidden style="height: calc(100% - 64px)">
          <el-menu
            class="el-menu-vertical-demo"
            :collapse="!sideBar"
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
  </div>
</template>
<script>
import BrandLogo from "@/components/logo/BrandLogo";
import Menu from "@/components/menu/Menu";
import { mapGetters } from "vuex";
export default {
  name: "BasicAsidePc",
  components: { BrandLogo, Menu },
  computed: {
    ...mapGetters(["routes", "sideBar", "sFixed"]),
  },
};
</script>
<style lang="less"></style>
