const app = {
  state: {
    sideBar: true, // 常开 / 半开
    isMobile: false, // 移动端
  },
  actions: {},
  mutations: {
    SET_SIDE_BAR(state, value) {
      state.sideBar = value;
    },
    SET_IS_MOBILE(state, value) {
      state.isMobile = value;
    },
  },
};
export default app;
