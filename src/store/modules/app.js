const app = {
  state: {
    sideBar: true, // 常开 / 半开
    isMobile: false, // 移动端
    sFixed: true, // sideBar fixed
    tFixed: true, // top fixed
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
        state.sideBar = true;
      }
    },
    SET_S_FIXED(state, value) {
      state.sFixed = value;
    },
    SET_T_FIXED(state, value) {
      state.tFixed = value;
    },
  },
};
export default app;
