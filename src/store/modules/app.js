const app = {
  state: {
    sideBar: true, // 常开 / 半开
    isMobile: false, // 移动端
    sFixed: false, // sideBar fixed
    tFixed: false, // top fixed
    menuDirection: "top", // 菜单栏位置,top/left
    themeType: "dark", // 主题：dark: 暗色模式，light: 亮色模式
    themeColor: "#67c23a", // 主题色
    size: "",
  },
  actions: {},
  mutations: {
    SET_MENU_DIRECTION(state, value) {
      state.menuDirection = value;
    },
    SET_SIDE_BAR(state, value) {
      state.sideBar = value;
    },
    SET_IS_MOBILE(state, value) {
      state.isMobile = value;
    },
    SET_SIZE(state, value) {
      state.size = value;
      if (value == "xs") {
        state.isMobile = true;
        state.sideBar = false;
      } else {
        state.isMobile = false;
        state.sideBar = true;
      }
    },
    SET_S_FIXED(state, value) {
      state.sFixed = value;
    },
    SET_T_FIXED(state, value) {
      state.tFixed = value;
    },
    SET_THEME_TYPE(state, value) {
      state.themeType = value;
    },
    SET_THEME_COLOR(state, value) {
      state.themeColor = value;
    },
  },
};
export default app;
