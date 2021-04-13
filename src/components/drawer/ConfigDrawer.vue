<template>
  <div class="Config-Drawer">
    <el-drawer
      title="主题设置"
      :visible.sync="theDrawer"
      :with-header="false"
      :size="256"
    >
      <div class="p-1 color-gray-700 fs-base w-full">
        <div class="m-b-3">
          <h3 class="fs-md fw-normal color-gray-800 m-b-1">整体风格设置</h3>
          <div>
            <span class="m-r-0.5 inline-block position-rl">
              <el-tooltip placement="top-start" content="亮色模式">
                <img
                  @click="handleThemeTypeChange('light')"
                  cursor="pointer"
                  src="https://gw.alipayobjects.com/zos/antfincdn/NQ%24zoisaD2/jpRkZQMyYRryryPNtyIC.svg"
                  alt="light"
                />
              </el-tooltip>
              <i
                v-if="themeType == 'light'"
                class="el-icon-check checked-icon no-event"
              ></i>
            </span>
            <span class="m-l-0.5 inline-block position-rl">
              <el-tooltip placement="top-start" content="暗色模式">
                <img
                  @click="handleThemeTypeChange('dark')"
                  cursor="pointer"
                  src="https://gw.alipayobjects.com/zos/antfincdn/XwFOFbLkSM/LCkqqYNmvBEbokSDscrm.svg"
                  alt="dark"
                />
              </el-tooltip>
              <i
                v-if="themeType == 'dark'"
                class="el-icon-check checked-icon no-event"
              ></i>
            </span>
          </div>
        </div>
        <el-divider />
        <div class="m-b-3">
          <h3 class="fs-md fw-normal color-gray-800 m-b-1">主题色</h3>
          <el-color-picker
            :value="themeColor"
            @change="handleThemeColorChange"
          />
        </div>
        <el-divider />
        <div class="m-b-3">
          <h3 class="fs-md fw-normal color-gray-800 m-b-1">内容区域</h3>
          <span class="clearfix block m-b-1">
            <span class="float-l">固定 Header</span>
            <el-switch
              :value="tFixed"
              class="float-r"
              @change="handleHeaderFixedChange"
            ></el-switch>
          </span>
          <span class="clearfix block m-b-1">
            <span class="float-l">固定侧边栏菜单</span>
            <el-switch
              :value="sFixed"
              class="float-r"
              @change="handleSideFixedChange"
            ></el-switch>
          </span>
        </div>
      </div>
    </el-drawer>
    <el-button
      type="primary"
      @click="() => (theDrawer = !theDrawer)"
      :class="[
        'drawer-set',
        theDrawer
          ? 'drawer-set-open el-icon-close'
          : 'drawer-set-closed el-icon-s-tools',
      ]"
    ></el-button>
  </div>
</template>
<script>
import Color from "color";
import { mapGetters } from "vuex";
import less from "less";
export default {
  name: "ConfigDrawer",
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    drawer: {
      handler(newVal) {
        this.theDrawer = newVal;
      },
      immediate: true,
    },
  },
  computed: {
    ...mapGetters(["sFixed", "tFixed", "themeColor", "themeType"]),
  },
  data() {
    return {
      theDrawer: false,
    };
  },
  methods: {
    handleSideFixedChange(value) {
      this.$store.commit("SET_S_FIXED", value);
    },
    handleHeaderFixedChange(value) {
      this.$store.commit("SET_T_FIXED", value);
    },
    handleThemeColorChange(value) {
      let asideBg,
        menuBg,
        subMenuBg,
        subMenuBgActive,
        menuColorActive,
        menuColor;
      if (this.themeType == "light") {
        asideBg = "#fff";
        menuBg = "#fff";
        subMenuBg = "#fff";
        subMenuBgActive = Color(value).mix(Color("white"), 0.8).hex();
        menuColorActive = value;
        menuColor = "@gray-800";
      }
      if (this.themeType == "dark") {
        asideBg = "#001529";
        menuBg = "#001529";
        subMenuBg = "#000c17";
        subMenuBgActive = value;
        menuColorActive = Color(value).mix(Color("white"), 0.8).hex();
        menuColor = "@gray-500";
      }
      less
        .modifyVars({
          "@asideBg": asideBg,
          "@menuBg": menuBg,
          "@subMenuBg": subMenuBg,
          "@subMenuBgActive": subMenuBgActive,
          "@menuColorActive": menuColorActive,
          "@menuColor": menuColor,
        })
        .then(() => {
          this.$store.commit("SET_THEME_COLOR", value);
        });
    },
    handleThemeTypeChange(value) {
      let asideBg,
        menuBg,
        subMenuBg,
        subMenuBgActive,
        menuColorActive,
        menuColor;
      if (value == "light") {
        asideBg = "#fff";
        menuBg = "#fff";
        subMenuBg = "#fff";
        subMenuBgActive = Color(this.themeColor).mix(Color("white"), 0.8).hex();
        menuColorActive = this.themeColor;
        menuColor = "@gray-800";
      }
      if (value == "dark") {
        asideBg = "#001529";
        menuBg = "#001529";
        subMenuBg = "#000c17";
        subMenuBgActive = this.themeColor;
        menuColorActive = Color(this.themeColor).mix(Color("white"), 0.8).hex();
        menuColor = "@gray-500";
      }
      less
        .modifyVars({
          "@asideBg": asideBg,
          "@menuBg": menuBg,
          "@subMenuBg": subMenuBg,
          "@subMenuBgActive": subMenuBgActive,
          "@menuColorActive": menuColorActive,
          "@menuColor": menuColor,
        })
        .then(() => {
          this.$store.commit("SET_THEME_TYPE", value);
        });
    },
  },
};
</script>
<style lang="less" scoped>
.drawer-set {
  transition: all 1/3.755s ease-out;
  z-index: 10000;
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #f4f4f5; // @info-100
  position: fixed;
  top: 60%;
}
.drawer-set-open {
  right: 256px;
}
.drawer-set-closed {
  right: 0;
}

.checked-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
