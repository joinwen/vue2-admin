<template>
  <div class="Basic-Header-Menu-Comp">
    <div
      :class="{
        'basic-header-menu-static': true,
        'basic-header-menu-fixed': tFixed,
      }"
    >
      <aside class="basic-header-menu-pseudo"></aside>
      <aside class="basic-header-menu-real">
        <el-scrollbar border-none x-hidden>
          <el-menu
            mode="horizontal"
            class="el-menu-horizontal-demo"
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
        <notice-bell class="notice-bell ease-out-1/60" />
        <user-pane class="user-pane ease-out-1/60" />
      </aside>
    </div>
  </div>
</template>
<script>
import Menu from "@/components/menu/Menu";
import NoticeBell from "@/components/notice/NoticeBell";
import UserPane from "@/components/pane/UserPane";
import { mapGetters } from "vuex";
export default {
  name: "BasicHeaderMenu",
  components: { NoticeBell, UserPane, Menu },
  computed: {
    ...mapGetters(["routes", "sideBar", "tFixed"]),
  },
};
</script>
<style lang="less" scoped></style>
