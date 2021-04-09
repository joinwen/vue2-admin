const avatar = (state) => state.user.avatar;
const nickname = (state) => state.user.nickname;
const sideBar = (state) => state.app.sideBar;
const isMobile = (state) => state.app.isMobile;
const routes = (state) => state.router.routes;
const tFixed = (state) => state.app.tFixed;
const sFixed = (state) => state.app.sFixed;
export default {
  avatar,
  nickname,
  sideBar,
  routes,
  isMobile,
  tFixed,
  sFixed,
};
