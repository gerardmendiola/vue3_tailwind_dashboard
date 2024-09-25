import { createStore } from "vuex";

export default createStore({
  state: {
    navMenu: false
  },
  mutations: {
    UPDATE_NAV_MENU(state, payload) {
      state.navMenu = payload;
    },
  },
  actions: {
    // increment (context) {
    //   context.commit('increment')
    // }
  }
});