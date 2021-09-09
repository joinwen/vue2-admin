import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
import user from "./modules/user";
import router from "./modules/router";
import getters from "./getters";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    user,
    router,
  },
  getters,
});
