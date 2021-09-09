const avatar = (state) => state.user.avatar;
const nickname = (state) => state.user.nickname;
const sideBar = (state) => state.app.sideBar;
const isMobile = (state) => state.app.isMobile;
const routes = (state) => state.router.routes;
const tFixed = (state) => state.app.tFixed;
const sFixed = (state) => state.app.sFixed;
const size = (state) => state.app.size;
const menuDirection = (state) => state.app.menuDirection;
const themeColor = (state) => state.app.themeColor;
const themeType = (state) => state.app.themeType;
const night = (state) => state.app.night;
export default {
  size,
  avatar,
  nickname,
  sideBar,
  routes,
  isMobile,
  tFixed,
  sFixed,
  menuDirection,
  themeColor,
  themeType,
  night,
};
