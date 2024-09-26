import { createStore } from "vuex";

export default createStore({
  state: {
    navMenu: false,
    postList: [],
    commentList: []
  },
  mutations: {
    UPDATE_NAV_MENU(state, payload) {
      state.navMenu = payload;
    },
    GET_POST_LIST(state, payload) {
      state.postList = payload;
    },
    GET_POST_COMMENTS(state, payload) {
      state.commentList = payload;
    },
  },
  actions: {
    getPostList (context) {
      fetch('https://jsonplaceholder.typicode.com/posts').then(resp => resp.json()).then(data => {
        context.commit("GET_POST_LIST", data)
      })
    },
    getSpecificPost (context, id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(resp => resp.json()).then(data => {
        context.commit("GET_POST_COMMENTS", data)
      })
    }
  }
});