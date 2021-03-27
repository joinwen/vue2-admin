<template>
  <div class="basic-layout">
    <section>
      <div :class="['aside', sideBar ? 'aside-full' : 'aside-shrink']"></div>
      <aside :class="[sideBar ? 'aside-full' : 'aside-shrink']">
        <brand-logo />
        <el-scrollbar x-hidden style="height: calc(100% - 64px)">
          <el-menu
            class="el-menu-vertical-demo"
            :collapse="!sideBar"
            background-color="#001529"
            text-color="#a6aaae"
            active-text-color="#fff"
            :default-openeds="['1', '3']"
          >
            <el-submenu index="1">
              <template slot="title"
                ><i class="el-icon-message"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-menu-item index="1-4">选项4</el-menu-item>
              <el-menu-item index="1-5">选项5</el-menu-item>
              <el-menu-item index="1-6">选项6</el-menu-item>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"
                ><i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-menu-item index="2-4">选项4</el-menu-item>
              <el-menu-item index="2-5">选项5</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"
                ><i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
              <el-menu-item index="3-3">选项3</el-menu-item>
              <el-submenu index="3-4">
                <template slot="title">选项4</template>
                <el-menu-item index="3-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-scrollbar>
      </aside>
      <section class="bg-info-100">
        <div class="header"></div>
        <header
          :class="['bg-white', sideBar ? 'header-shrink' : 'header-full']"
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
          <div class="user-pane ease-out-1/60 hover:gray-100">
            <user-pane />
          </div>
          <div class="notice ease-out-1/60 hover:gray-100">
            <notice-bell />
          </div>
        </header>
        <main class="m-1 p-1 rounded-4 bg-white">
          <router-view />
        </main>
        <footer>
          <site-footer />
        </footer>
      </section>
    </section>
  </div>
</template>
<script>
import BrandLogo from "../../components/logo/BrandLogo";
import Hamburger from "../../components/hambuger/Hamburger";
import NoticeBell from "../../components/notice/NoticeBell";
import SiteFooter from "../../components/footer/SiteFooter";
import UserPane from "../../components/pane/UserPane";
import { mapGetters } from "vuex";
export default {
  name: "BasicLayout",
  components: { UserPane, SiteFooter, NoticeBell, Hamburger, BrandLogo },
  computed: {
    ...mapGetters(["sideBar"]),
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
<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 256px;
}

.el-menu-item {
  background-color: #000c17 !important;
}
.el-submenu__title:hover {
  background-color: #001529 !important;
}

.el-menu-item:hover {
  background-color: #000c17 !important;
}

.basic-layout {
  height: 100%;

  section {
    min-height: 100%;
    display: flex;

    .aside-shrink {
      width: 65px;
    }
    .aside-full {
      width: 256px;
    }
    .aside {
      flex: 0 0 auto;
    }
    aside {
      position: fixed;
      top: 0;
      bottom: 0;
      background-color: #001529;
    }
    section {
      flex: auto;
      display: flex;
      flex-direction: column;

      .header {
        height: 64px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        flex: 0 0 auto;
      }
      .header-shrink {
        width: calc(100% - 256px);
      }
      .header-full {
        width: calc(100% - 65px);
      }
      header {
        height: 64px;
        position: fixed;
        top: 0px;

        .hamburger {
          float: left;
        }

        .notice {
          float: right;
        }

        .user-pane {
          float: right;
        }
      }

      main {
        flex: auto;
      }

      footer {
        height: 64px;
        flex: 0 0 auto;
        background-color: cornsilk;
      }
    }
  }
}
</style>
