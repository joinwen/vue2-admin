const avatar = (state) => state.user.avatar;
const nickname = (state) => state.user.nickname;
const sideBar = (state) => state.app.sideBar;
const routes = (state) => state.router.routes;
export default {
  avatar,
  nickname,
  sideBar,
  routes,
};
