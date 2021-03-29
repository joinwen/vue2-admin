import { constantRoutes } from "../../config/router.config";
const router = {
  state: {
    routes: constantRoutes,
    addRoutes: [],
  },
  mutations: {
    SET_ADD_ROUTES(state, value) {
      state.addRoute = value;
      state.routes = state.routes.concat(value);
    },
  },
};

export default router;
