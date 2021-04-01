const app = {
  state: {
    sideBar: true, // 常开 / 半开
    isMobile: false, // 移动端
    size: "",
  },
  actions: {},
  mutations: {
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
      }
    },
  },
};
export default app;
